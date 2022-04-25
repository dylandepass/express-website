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
import htm from './htm.js';
import { render, h } from './preact.js';
import { getIcon } from '../../scripts/scripts.js';
import ratingsStyle from './lit-rewrite.css.js';

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


  return html`
      <div>HI</div>
    `;
}

customElements.define('rating-element', RatingElement);

export default function decorate($block) {
  $block.innerHTML = '';
  render(html`<${Carousel} stories=${stories} />`, $block);
}
