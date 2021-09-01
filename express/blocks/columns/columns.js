/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
/* global document, window */

import { linkImage, createTag, transformLinkToAnimation } from '../../scripts/scripts.js';

function decorateIconList($columnCell) {
  $columnCell.querySelectorAll('p:empty').forEach(($p) => $p.remove());

  const $iconList = createTag('div', { class: 'columns-iconlist' });
  const $icons = [...$columnCell.querySelectorAll('img.icon, svg.icon')];
  if ($icons.length === 1) {
    // treat single icon as brand icon
    $icons[0].classList.add('brand');
    return;
  }
  let $before;
  $icons.forEach(($icon, i) => {
    if (!i) $before = $icon.previousSibling;
    const $iconListRow = createTag('div');
    const $iconListDescription = createTag('div', { class: 'columns-iconlist-description' });
    $iconListDescription.appendChild($icon.nextSibling);
    const $iconDiv = createTag('div', { class: 'columns-iconlist-icon' });
    $iconDiv.appendChild($icon);
    $iconListRow.appendChild($iconDiv);
    $iconListRow.appendChild($iconListDescription);
    $iconList.appendChild($iconListRow);
  });

  if ($icons.length > 0) {
    if ($before) {
      $columnCell.insertBefore($iconList, $before.nextSibling);
    }
  }
}

/**
 * calculates the number of lines taken up by a heading's text
 * and determines if it is greater or less than @maxLines
 * @param {Element} heading - a H1 - H6 element.
 * @param {Number} maxLines - maximum number of lines a heading can span
 * @param {Boolean} greaterThan - bool test for if we are evaluating >
 * @returns {boolean} - whether a heading is over/under 3 lines long
 */
function headingComparison(heading, maxLines, greaterThan = true) {
  const style = window.getComputedStyle(heading);
  const { height, lineHeight } = style;
  // dimensions of headings
  const heightInt = parseInt(height, 10);
  const lineHeightFloat = parseFloat(lineHeight);
  // should be verifiable by looking at number of lines
  const headingLines = Math.ceil(heightInt / lineHeightFloat);

  return greaterThan ? headingLines > maxLines : headingLines < maxLines;
}

/**
 * This function ensures headers fit within a 3 line limit and will reduce
 * font size and line height until text falls within this limit!
 * @param {NodeListOf<Element>} headings - a list of heading nodes that are H1-H6
 * @param {Map} sizes - a mapping between heading size number and specification t-shirt size.
 * @param {Number} maxLines - maximal amount of lines a heading can take up.
 */
function shrinkHeadings(headings, sizes, maxLines = 3) {
  headings.forEach((heading) => {
    const { tagName } = heading;
    // length at which a string is probably oversized.
    const TEXT_OVERSIZED_CONSTANT = 44;
    const headingNum = parseInt(tagName.charAt(1), 10);
    let currH = headingNum;
    // check upon execution
    const downSize = () => {
      // short circuit logic!
      currH += 1;
      heading.style.fontSize = `var(--heading-font-size-${sizes[currH]})`;
    };
    do {
      if (headingComparison(heading, maxLines)) {
        downSize();
      } else if (heading.textContent.length >= TEXT_OVERSIZED_CONSTANT
          && !heading.style.fontSize) {
        downSize();
      }
    } while (!!heading.style.fontSize
        && headingComparison(heading, maxLines)
        && currH <= 7);
  });
}

/**
 * This function ensures headings take up as much space as possible within
 * a 3 line limit and will grow font size and, correspondingly line height until text maximizes
 * itself within this limit!
 * @param {NodeListOf<Element>} headings - a list of heading nodes that are H1-H6
 * @param {Map} sizes - a mapping between heading size number and specification t-shirt size.
 * @param {Number} maxLines - maximal amount of lines a heading can take up.
 */
function growHeadings(headings, sizes, maxLines = 3) {
  headings.forEach((heading) => {
    const { tagName } = heading;
    const headingNum = parseInt(tagName.charAt(1), 10);
    let currH = headingNum;
    // check upon execution
    const upSize = () => {
      // short circuit logic!
      currH -= 1;
      heading.style.fontSize = `var(--heading-font-size-${sizes[currH]})`;
    };
    do {
      if (headingComparison(heading, maxLines, false)) {
        upSize();
      }
    } while (!!heading.style.fontSize
        && headingComparison(heading, maxLines, false)
        && currH >= 0);
  });
}

/**
 * scales headings and determines whether to shrink or grow a heading.
 */
function scaleHeadings() {
  const headingNum2Font = {
    1: 'xxl',
    2: 'xl',
    3: 'l',
    4: 'm',
    5: 'm',
    6: 'm',
    7: 's',
  };
  const headings = document.querySelectorAll('main .columns h1, main .columns h2, main .columns h3, main .columns h4, main .columns h5, main .columns h6');
  let oldWidth = window.innerWidth;
  let oldHeight = window.innerHeight;
  window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    if (newWidth > oldWidth || newHeight > oldHeight) {
      growHeadings(headings, headingNum2Font);
      // update old
      oldWidth = newWidth;
      oldHeight = newHeight;
    } else {
      shrinkHeadings(headings, headingNum2Font);
    }
  });
}

export default function decorate($block) {
  scaleHeadings();
  const $rows = Array.from($block.children);
  if ($rows.length > 1) {
    $block.classList.add('table');
  }

  let numCols = 0;
  if ($rows[0]) numCols = $rows[0].children.length;

  if (numCols) $block.classList.add(`width-${numCols}-columns`);

  let total = $rows.length;
  const isNumberedList = $block.classList.contains('numbered');
  if (isNumberedList && $block.classList.length > 4) {
    const i = parseInt($block.classList[3], 10);
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(i)) {
      total = i;
    }
  }

  $rows.forEach(($row, rowNum) => {
    const $cells = Array.from($row.children);
    $cells.forEach(($cell, cellNum) => {
      if ($cell.querySelector('img.icon, svg.icon')) {
        decorateIconList($cell);
      }

      if (cellNum === 0 && isNumberedList) {
        // add number to first cell
        let num = rowNum + 1;
        if (total > 9) {
          // stylize with total for 10 or more items
          num = `${num}/${total} —`;
          if (rowNum < 9) {
            // pad number with 0
            num = `0${num}`;
          }
        } else {
          // regular ordered list style for 1 to 9 items
          num = `${num}.`;
        }
        $cell.innerHTML = `<span class="num">${num}</span>${$cell.innerHTML}`;
      }

      const $pics = $cell.querySelectorAll(':scope picture');
      if ($pics.length === 1 && $pics[0].parentElement.tagName === 'P') {
        // unwrap single picture if wrapped in p tag, see https://github.com/adobe/helix-word2md/issues/662
        const $parentDiv = $pics[0].closest('div');
        const $parentParagraph = $pics[0].parentNode;
        $parentDiv.insertBefore($pics[0], $parentParagraph);
      }

      // this probably needs to be tighter and possibly earlier
      const $a = $cell.querySelector('a');
      if ($pics[0] && $a) {
        if ($a.textContent.startsWith('https://')) {
          if ($a.href.endsWith('.mp4')) {
            transformLinkToAnimation($a);
          } else {
            linkImage($cell);
          }
        }
      }
      if ($a && $a.classList.contains('button')) {
        if ($block.classList.contains('fullsize')) {
          $a.classList.add('xlarge');
        } else if ($a.classList.contains('light')) {
          $a.classList.replace('accent', 'primary');
        }
      }

      $cell.querySelectorAll(':scope p:empty').forEach(($p) => $p.remove());

      $cell.classList.add('column');
      if ($cell.firstElementChild.tagName === 'PICTURE') {
        $cell.classList.add('column-picture');
      }

      const $pars = $cell.querySelectorAll('p');
      for (let i = 0; i < $pars.length; i += 1) {
        if ($pars[i].innerText.match(/Powered by/)) {
          $pars[i].classList.add('powered-by');
        }
      }
    });
  });
}
