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
import decorate from './commerce-cta.js';
import style from './commerce-cta.css';

export const CommerceCTA = (args, context) => FranklinTemplate(app, args, context, decorate, style);

CommerceCTA.parameters = {
  path: '/storybook/express/commerce-cta.plain.html',
  selector: '.commerce-cta',
  root: true,
  index: 0,
};

CommerceCTA.storyName = 'Commerce CTA';

/**
 * Default Config
 */
export default {
  title: 'Commerce CTA',
  parameters: {
    docs: {
      description: {
        component: 'An example Commerce CTA block',
      },
    },
  },
};
