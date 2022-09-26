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
import decorate from './tutorials.js';
import style from '../../styles/styles.css';
import tutorialsStyle from './tutorials.css';

export const Tutorials = (args, context) => FranklinTemplate(app, args, context, decorate);

Tutorials.parameters = {
  path: '/storybook/express/tutorials.plain.html',
  selector: '.tutorials',
  index: 0,
};

Tutorials.storyName = 'Tutorials';

/**
 * Default Config
 */
export default {
  title: 'Tutorials',
  parameters: {
    docs: {
      description: {
        component: 'An example Tutorials block',
      },
    },
  },
};
