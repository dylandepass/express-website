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

import { html, LitElement, unsafeSVG, ref, createRef, range, map, when } from './lit.min.js';
import { getIcon } from '../../scripts/scripts.js';
import ratingsStyle from './lit-rewrite.css.js';

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

export class RatingElement extends LitElement {
  static styles = [ratingsStyle];

  static properties = {
    active: { type: Boolean },
    submitted: { type: Boolean },
    selectedRating: { type: Object },
  };

  constructor() {
    super();
    this.star = getIcon('star');
    this.selectedRating = ratings.at(4);
    this.rangeRef = createRef();
    this.toolTipRef = createRef();
    this.sliderFillRef = createRef();
    this.comment = createRef();
  }

  _onRangeInput(e) {
    const { value } = e.target;
    this._calculateRating(value);
    this._updateToolTip(value);
  }

  _onRangeChange(e) {
    const roundedValue = this._calculateRating(e.target.value);
    this._updateToolTip(roundedValue);
  }

  _onStarsClick(index) {
    this._calculateRating(index);
    this._updateToolTip(index);
  }

  _onRangeTouchStart() {
    this.toolTipRef.value.style.transition = 'none';
    this.sliderFillRef.value.style.transition = 'none';
  }

  _onRangeTouchEnd() {
    this.toolTipRef.value.style.transition = 'left .3s, right .3s';
    this.sliderFillRef.value.style.transition = 'width .3s';
  }

  _onSubmit(e) {
    e.preventDefault();
    this.submitted = true;
  }

  _calculateRating(value) {
    const roundedValue = Math.round(value);
    this.selectedRating = ratings.at(roundedValue - 1);
    this.active = true;
    return roundedValue;
  }

  _updateToolTip(value) {
    const { value: rangeSlider } = this.rangeRef;
    const { value: toolTip } = this.toolTipRef;
    const { value: sliderFill } = this.sliderFillRef;
    const thumbWidth = 60;
    const pos = (value - rangeSlider.getAttribute('min')) / (rangeSlider.getAttribute('max') - rangeSlider.getAttribute('min'));
    const thumbCorrect = (thumbWidth * (pos - 0.25) * -1) - 0.1;
    const titlePos = (pos * rangeSlider.offsetWidth) - (thumbWidth / 4) + thumbCorrect;
    toolTip.style.left = `${titlePos}px`;
    sliderFill.style.width = `${titlePos + (thumbWidth / 2)}px`;
  }

  _renderStar(count) {
    return map(range(count), () => unsafeSVG(this.star));
  }

  _renderCommentBlock() {
    return html`
      <div class= "slider-comment">
        <label for="comment">${this.selectedRating.textareaLabel}</label>
        <textarea id="comment" name="comment" rows="5" placeholder="${this.selectedRating.textareaInside}" ?required=${this.selectedRating.feedbackRequired} ${ref(this.comment)}></textarea>
        <input type="submit" value="Submit rating" @click="${this._onSubmit}">
      </div>
    `;
  }

  _renderThankYouBlock() {
    return html`
      <h2>Thank you for your feedback</h2>
      <p>
        (Testing that the block is working correctly): <br />
        Your rating: ${this.selectedRating.text} stars <br />
        Your comment: "${this.comment.value.value}"
      </p>
    `;
  }

  render() {
    return html`
      <div class="ratings block ${this.active && this.selectedRating.class}">
        <h2 id="rate-our-quick-action">Rate our Quick Action<span class="rating-stars">${this._renderStar(ratings.length)}</span></h2>
        <form>
          <div class="slider">
            <div class="tooltip" ${ref(this.toolTipRef)}>
              <span class="tooltip--text">${this.selectedRating.text}</span>
              <div class="tooltip--image">${unsafeSVG(this.selectedRating.img)}</div>
            </div>
            <input type="range" min="1" max="${ratings.length}" step="0.001" value="4.5" aria-labelledby="rate-our-quick-action" ${ref(this.rangeRef)} @change=${this._onRangeChange} @input=${this._onRangeInput} @mousedown=${this._onRangeTouchStart} @touchstart=${this._onRangeTouchStart} @mouseup=${this._onRangeTouchEnd} @touchend=${this._onRangeTouchEnd}>
            <div class="slider-fill" ${ref(this.sliderFillRef)}></div>
          </div>
          <div class="slider-bottom">
            ${map(range(ratings.length), (index) => html`
              <div class="vertical-line">
                <button type="button" aria-label="${index + 1}" class="stars ${ratings[index].class}" @click=${() => this._onStarsClick(index + 1)}>
                  ${this._renderStar(index + 1)}
                </button>
              </div>
            `)}
          </div>
          ${when(this.submitted, this._renderThankYouBlock.bind(this), this._renderCommentBlock.bind(this))}
        </form >
      </div > `;
  }
}

customElements.define('rating-element', RatingElement);

export default function decorate($block) {
  const ratingElement = document.createElement('rating-element');
  $block.innerHTML = '';
  $block.appendChild(ratingElement);
}
