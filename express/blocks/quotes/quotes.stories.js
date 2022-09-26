/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable no-unused-vars */

import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import { app } from '../../scripts/scripts.js';
import style from '../../styles/styles.css';
import decorate from './quotes.js';
import quotesStyle from './quotes.css';

export const Quotes = (args, context) => FranklinTemplate(app, args, context, decorate);

Quotes.storyName = 'Quotes';

Quotes.parameters = {
  path: '/storybook/express/quotes.plain.html',
  selector: '.quotes',
  index: 0,
};

export const QuotesDark = (args, context) => FranklinTemplate(app, args, context, decorate);

QuotesDark.storyName = 'Quotes Dark';

QuotesDark.parameters = {
  path: '/storybook/express/quotes.plain.html',
  selector: '.quotes-dark',
  index: 0,
};

export const QuotesInverted = (args, context) => FranklinTemplate(app, args, context, decorate);

QuotesInverted.storyName = 'Quotes Inverted';

QuotesInverted.parameters = {
  path: '/storybook/express/quotes.plain.html',
  selector: '.quotes-inverted',
  index: 0,
};

export const QuotesHighlighted = (args, context) => FranklinTemplate(app, args, context, decorate);

QuotesHighlighted.storyName = 'Quotes Highlighted';

QuotesHighlighted.parameters = {
  path: '/storybook/express/quotes.plain.html',
  selector: '.quotes-highlight',
  index: 0,
};

/**
 * Default Config
 */
export default {
  title: 'Quotes',
  parameters: {
    docs: {
      description: {
        component: 'A block to display quotes',
      },
    },
  },
};
