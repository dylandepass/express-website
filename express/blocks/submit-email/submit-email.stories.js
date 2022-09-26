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
import decorate from './submit-email.js';
import style from '../../styles/styles.css';
import actionCardsStyle from './submit-email.css';

export const SubmitEmail = (args, context) => FranklinTemplate(app, args, context, decorate);

SubmitEmail.parameters = {
  path: '/storybook/express/submit-email.plain.html',
  selector: '.submit-email',
  index: 0,
};

SubmitEmail.storyName = 'Submit Email';

/**
 * Default Config
 */
export default {
  title: 'Submit Email',
  parameters: {
    docs: {
      description: {
        component: 'An example Submit Email block',
      },
    },
  },
};
