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
import decorate from './embed.js';
import actionCardsStyle from './embed.css';

export const EmbedYoutube = (args, context) => FranklinTemplate(app, args, context, decorate);

EmbedYoutube.parameters = {
  path: '/storybook/express/embed.plain.html',
  selector: '.embed',
  index: 0,
};

EmbedYoutube.storyName = 'Embed Youtube';

export const Embed = (args, context) => FranklinTemplate(app, args, context, decorate);

Embed.parameters = {
  path: '/storybook/express/embed.plain.html',
  selector: '.embed',
  index: 1,
};

Embed.storyName = 'Embed MP4';

export const EmbedInstagram = (args, context) => FranklinTemplate(app, args, context, decorate);

EmbedInstagram.parameters = {
  path: '/storybook/express/embed.plain.html',
  selector: '.embed',
  index: 2,
};

EmbedInstagram.storyName = 'Embed Instagram';

/**
 * Default Config
 */
export default {
  title: 'Embed',
  parameters: {
    docs: {
      description: {
        component: 'An example Embed block',
      },
    },
  },
};
