/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable no-mixed-operators, object-curly-newline */

import htm from 'https://cdn.skypack.dev/htm';
import { render, h } from 'https://cdn.skypack.dev/preact@10.4.7';
import { useState, useRef } from 'https://cdn.skypack.dev/preact@10.4.7/hooks';
import { getIcon } from '../../scripts/scripts.js';

const html = htm.bind(h);

const ratings = [
  {
    class: 'one-star',
    img: getIcon('emoji-angry-face'),
    text: 'Disappointing',
    textareaLabel: "We're sorry to hear that. What went wrong?",
    textareaInside: 'Your feedback (Required)',
    feedbackRequired: true,
  },
  {
    class: 'two-stars',
    img: getIcon('emoji-thinking-face'),
    text: 'Insufficient',
    textareaLabel: 'We value your feedback. How can we improve?',
    textareaInside: 'Your feedback (Required)',
    feedbackRequired: true,
  },
  {
    class: 'three-stars',
    img: getIcon('emoji-upside-down-face'),
    text: 'Satisfied',
    textareaLabel: 'Satisfied is good, but what would make us great?',
    textareaInside: 'Your feedback (Optional)',
    feedbackRequired: false,
  },
  {
    class: 'four-stars',
    img: getIcon('emoji-smiling-face'),
    text: 'Helpful',
    textareaLabel: 'Was there more we could do to be better?',
    textareaInside: 'Your feedback (Optional)',
    feedbackRequired: false,
  },
  {
    class: 'five-stars',
    img: getIcon('emoji-star-struck'),
    text: 'Amazing',
    textareaLabel: "That's great. Could you tell us what you loved?",
    textareaInside: 'Your feedback (Optional)',
    feedbackRequired: false,
  },
];

const RatingElement = (props) => {
  const [active, setActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState(ratings.at(4));
  const [star, _] = useState();
  const rangeRef = useRef(null);
  const toolTipRef = useRef(null);
  const sliderFillRef = useRef(null);
  const comment = useRef(null);

  function _onRangeInput(e) {
    const { value } = e.target;
    _calculateRating(value);
    _updateToolTip(value);
  }

  function _onRangeChange(e) {
    const roundedValue = _calculateRating(e.target.value);
    _updateToolTip(roundedValue);
  }

  function _onStarsClick(index) {
    _calculateRating(index);
    _updateToolTip(index);
  }

  function _onRangeTouchStart() {
    toolTipRef.current.style.transition = 'none';
    sliderFillRef.current.style.transition = 'none';
  }

  function _onRangeTouchEnd() {
    toolTipRef.current.style.transition = 'left .3s, right .3s';
    sliderFillRef.current.style.transition = 'width .3s';
  }

  function _onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function _calculateRating(value) {
    const roundedValue = Math.round(value);
    setSelectedRating(ratings.at(roundedValue - 1));
    setActive(true);
    return roundedValue;
  }

  function _updateToolTip(value) {
    const { current: rangeSlider } = rangeRef;
    const { current: toolTip } = toolTipRef;
    const { current: sliderFill } = sliderFillRef;
    const thumbWidth = 60;
    const pos = (value - rangeSlider.getAttribute('min')) / (rangeSlider.getAttribute('max') - rangeSlider.getAttribute('min'));
    const thumbCorrect = (thumbWidth * (pos - 0.25) * -1) - 0.1;
    const titlePos = (pos * rangeSlider.offsetWidth) - (thumbWidth / 4) + thumbCorrect;
    toolTip.style.left = `${titlePos}px`;
    sliderFill.style.width = `${titlePos + (thumbWidth / 2)}px`;
  }

  function _renderStar(count) {
    return [...Array(count)].map(() => html`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-star">
      <use href="/express/icons/ccx-sheet_44.svg#star44"></use>
    </svg>`);
  }

  function _renderCommentBlock() {
    return html`
      <div class="slider-comment">
        <label for="comment">${selectedRating.textareaLabel}</label>
        <textarea id="comment" name="comment" rows="5" placeholder="${selectedRating.textareaInside}" required=${selectedRating.feedbackRequired} ref=${comment}></textarea>
        <input type="submit" value="Submit rating" onClick=${_onSubmit}></input>
      </div>
    `;
  }

  function _renderThankYouBlock() {
    return html`
      <h2>Thank you for your feedback</h2>
      <p>
        (Testing that the block is working correctly): <br />
        Your rating: ${selectedRating.text} stars <br />
        Your comment: "${comment.current.value}"
      </p>
    `;
  }

  return html`<div class="ratings block ${active && selectedRating.class}">
        <h2 id="rate-our-quick-action">Rate our Quick Action<span class="rating-stars">${_renderStar(ratings.length)}</span></h2>
        <form>
          <div class="slider">
            <div class="tooltip" ref=${toolTipRef}>
              <span class="tooltip--text">${selectedRating.text}</span>
              <div class="tooltip--image" dangerouslySetInnerHTML=${{ __html: selectedRating.img }}></div>
            </div>
            <input type="range" min="1" max="${ratings.length}" step="0.001" value="4.5" aria-labelledby="rate-our-quick-action" ref=${rangeRef} onChange=${_onRangeChange} onInput=${_onRangeInput} onMouseDown=${_onRangeTouchStart}  onTouchStart=${_onRangeTouchStart} onMouseUp=${_onRangeTouchEnd} onTouchEnd=${_onRangeTouchEnd}></div>
            <div class="slider-fill" ref=${sliderFillRef}></div>
          </div>
          <div class="slider-bottom">
            ${[...Array(ratings.length)].map((_, index) => html`
                      <div class="vertical-line">
                        <button type="button" aria-label=${index + 1} class="stars ${ratings[index].class}" onClick=${() => _onStarsClick(index + 1)}>
                          ${_renderStar(index + 1)}
                        </button>
                      </div>
                    `)}
          </div>
           ${submitted ? (_renderThankYouBlock()
    ) : (
      _renderCommentBlock()
    )}
        </form >
      </div >
    `;
}

export default function decorate($block) {
  $block.innerHTML = '';
  render(html`<${RatingElement} />`, $block);
}


