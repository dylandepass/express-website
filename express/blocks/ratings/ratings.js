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

import {
  createTag,
// eslint-disable-next-line import/no-unresolved
} from '../../scripts/scripts.js';

function updateSlider($slider) {
  const thumbwidth = 60; // the pixel width of the thumb, to get position of tooltip & background.
  const $input = $slider.querySelector('input[type="range"]');
  const $tooltip = $slider.querySelector('.tooltip');
  const $tooltipText = $slider.querySelector('.tooltip--text');
  const $tooltipImg = $slider.querySelector('.tooltip--image img');

  const val = parseFloat($input.value) ?? 6;

  // temporarily getting images from emojipedia
  const ratings = [
    {
      text: 'Upset',
      img: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/angry-face_1f620.png',
    },
    {
      text: 'Dissatisfied',
      img: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/thinking-face_1f914.png',
    },
    {
      text: 'Content',
      img: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/upside-down-face_1f643.png',
    },
    {
      text: 'Satisfied',
      img: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/33/smiling-face-with-smiling-eyes_1f60a.png',
    },
    {
      text: 'Super happy',
      img: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/star-struck_1f929.png',
    },
  ];

  $tooltipText.innerText = ratings[val - 1].text;
  $tooltipImg.setAttribute('src', ratings[val - 1].img);

  // set position the tooltip with the thumb
  const pos = (val - $input.getAttribute('min')) / ($input.getAttribute('max') - $input.getAttribute('min'));
  const thumbCorrect = thumbwidth * (pos - 0.25) * -1;
  const titlepos = (pos * $input.offsetWidth) - (thumbwidth / 4) + thumbCorrect;
  $tooltip.style.left = `${titlepos}px`;
  // show "progress" on the track
  const percent = pos * 100;
  $input.style.background = `linear-gradient(90deg, #5c5ce0 ${percent}%,#dedef9 ${percent + 0.5}%)`;
}

function generateRatingSlider($block) {
  const $slider = createTag('div', { class: 'slider' });
  $block.append($slider);
  const $div = createTag('div');
  $slider.append($div);
  const $input = createTag('input', {
    type: 'range', name: 'rating', id: 'rating', min: '1', max: '5', step: '1', value: '5',
  });
  $div.append($input);
  $div.insertAdjacentHTML('afterbegin', /* html */`
    <div class="tooltip">
      <div>
        <span class="tooltip--text">
          Super happy
        </span>
        <div class="tooltip--image">
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/33/smiling-face-with-smiling-eyes_1f60a.png" />
        <div>
      </div>
    </div>
  `);
  $slider.insertAdjacentHTML('beforeend', /* html */`
    <div class="lines">
      <span class="vertical-line"></span>
      <span class="vertical-line"></span>
      <span class="vertical-line"></span>
      <span class="vertical-line"></span>
      <span class="vertical-line"></span>
    </div>
  `);
  updateSlider($slider);
  $input.addEventListener('input', () => updateSlider($slider), false);
  $input.addEventListener('change', () => updateSlider($slider), false);
  $input.addEventListener('keyup', () => updateSlider($slider), false);
  window.addEventListener('resize', () => {
    setTimeout(updateSlider($slider), 100);
  });
}

export default function decorate($block) {
  const $rating = createTag('h2', { id: 'rate-our-quick-action' });
  $rating.textContent = 'Rate our Quick Action';

  $block.innerHTML = '';
  $block.append($rating);

  generateRatingSlider($block);
}
