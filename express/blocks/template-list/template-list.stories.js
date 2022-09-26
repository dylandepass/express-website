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
import decorate from './template-list.js';

import howTostyle from './template-list.css';
import style from '../../styles/styles.css';

export const TemplateList = (args, context) => FranklinTemplate(app, args, context, decorate);

TemplateList.parameters = {
  path: '/storybook/express/template-list.plain.html',
  root: false,
  selector: '.template-list',
  index: 0,
};

TemplateList.storyName = 'Template List';

export const FourCol = (args, context) => FranklinTemplate(app, args, context, decorate);

FourCol.parameters = {
  path: '/storybook/express/template-list.plain.html',
  root: false,
  selector: '.template-list',
  index: 1,
};

FourCol.storyName = '4 Columns';

export const Horizontal = (args, context) => FranklinTemplate(app, args, context, decorate);

Horizontal.parameters = {
  path: '/storybook/express/template-list.plain.html',
  root: false,
  selector: '.template-list',
  index: 2,
};

Horizontal.storyName = 'Horizontal';

export const HorizontalFullWidth = (args, context) => FranklinTemplate(app,
  args,
  context,
  decorate);

HorizontalFullWidth.parameters = {
  path: '/storybook/express/template-list.plain.html',
  root: false,
  selector: '.template-list',
  index: 3,
};

HorizontalFullWidth.storyName = 'Horizontal - Full Width';

export const SixCol = (args, context) => FranklinTemplate(app, args, context, decorate);

SixCol.parameters = {
  path: '/storybook/express/template-list.plain.html',
  root: false,
  selector: '.template-list',
  index: 4,
};

SixCol.storyName = '6 Columns';

/**
 * Default Config
 */
export default {
  title: 'Template List',
  parameters: {
    docs: {
      description: {
        component: 'An example Template List block',
      },
    },
  },
};
