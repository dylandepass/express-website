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
import decorate from './quick-action-cards.js';
import style from '../../styles/styles.css';
import actionCardsStyle from './quick-action-cards.css';

export const QuickActionCards = (args, context) => FranklinTemplate(app, args, context, decorate);

QuickActionCards.parameters = {
  path: '/storybook/express/quick-action-cards.plain.html',
  selector: '.quick-action-cards',
  index: 0,
};

QuickActionCards.storyName = 'Quick Action Cards';

/**
 * Default Config
 */
export default {
  title: 'Quick Action Cards',
  parameters: {
    docs: {
      description: {
        component: 'An example Quick Action Cards block',
      },
    },
  },
};
