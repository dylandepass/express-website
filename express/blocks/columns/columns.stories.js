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

/* eslint-disable no-unused-vars, import/no-extraneous-dependencies */

import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import { app } from '../../scripts/scripts.js';
import decorate from './columns.js';
import style from './columns.css';

export const Columns = (args, context) => FranklinTemplate(app, args, context, decorate, style);

Columns.parameters = {
  path: '/storybook/express/columns.plain.html',
  selector: '.columns',
  index: 0,
};

Columns.storyName = 'Columns';

export const Columns2 = (args, context) => FranklinTemplate(app, args, context, decorate);

Columns2.parameters = {
  path: '/storybook/express/columns.plain.html',
  selector: '.columns',
  index: 1,
};

Columns2.storyName = 'Text Right';

export const ColumnsCentered = (args, context) => FranklinTemplate(app, args, context, decorate);

ColumnsCentered.parameters = {
  path: '/storybook/express/columns.plain.html',
  selector: '.columns',
  index: 2,
};

ColumnsCentered.storyName = 'Centered';

/**
 * Default Config
 */
export default {
  title: 'Columns',
  parameters: {
    docs: {
      description: {
        component: 'An example Columns block',
      },
    },
  },
};
