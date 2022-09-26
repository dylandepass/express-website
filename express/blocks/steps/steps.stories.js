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
import decorate from './steps.js';
import style from './steps.css';

export const StepsDark = (args, context) => FranklinTemplate(app, args, context, decorate, style);

StepsDark.parameters = {
  path: '/storybook/express/steps.plain.html',
  selector: '.steps-dark',
  root: true,
  index: 0,
};

StepsDark.storyName = 'Steps Dark';

export const StepsHighlight = (args, context) => FranklinTemplate(app,
  args,
  context,
  decorate,
  style);

StepsHighlight.parameters = {
  path: '/storybook/express/steps-highlight.plain.html',
  selector: '.steps-highlight',
  root: true,
  index: 1,
};

StepsHighlight.storyName = 'Steps Highlight';

/**
 * Default Config
 */
export default {
  title: 'Steps',
  parameters: {
    docs: {
      description: {
        component: 'An example Steps block',
      },
    },
  },
};
