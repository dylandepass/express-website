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

import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import { app } from '../../scripts/scripts.js';
import decorate from './layouts.js';
import style from './layouts.css';

export const Layouts = (args, context) => FranklinTemplate(app, args, context, decorate, style);

Layouts.parameters = {
  path: '/storybook/express/layouts.plain.html',
  selector: '.layouts',
  root: true,
  index: 0,
};

Layouts.storyName = 'Layouts';

/**
 * Default Config
 */
export default {
  title: 'Layouts',
  parameters: {
    docs: {
      description: {
        component: 'An example Layouts block',
      },
    },
  },
};
