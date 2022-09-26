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
import decorate from './icon-list.js';

import style from '../../styles/styles.css';
import howTostyle from './icon-list.css';

export const IconList1 = (args, context) => FranklinTemplate(app, args, context, decorate);

IconList1.parameters = {
  path: '/storybook/express/icon-list.plain.html',
  selector: '.icon-list',
  index: 0,
};

IconList1.storyName = 'IconList (1)';

export const IconList2 = (args, context) => FranklinTemplate(app, args, context, decorate);

IconList2.parameters = {
  path: '/storybook/express/icon-list.plain.html',
  selector: '.icon-list',
  index: 1,
};

IconList2.storyName = 'IconList (2)';

/**
 * Default Config
 */
export default {
  title: 'Icon List',
  parameters: {
    docs: {
      description: {
        component: 'An example Icon List block',
      },
    },
  },
};
