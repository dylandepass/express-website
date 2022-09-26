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
import decorate from './image-list.js';
import style from './image-list.css';

export const ImageList = (args, context) => FranklinTemplate(app, args, context, decorate, style);

ImageList.parameters = {
  path: '/storybook/express/image-list.plain.html',
  selector: '.image-list',
  index: 0,
};

ImageList.storyName = 'Image List';

export const ImageListResponsive = (args, context) => FranklinTemplate(app,
  args,
  context,
  decorate);

ImageListResponsive.parameters = {
  path: '/storybook/express/image-list.plain.html',
  selector: '.image-list',
  index: 1,
};

ImageListResponsive.storyName = 'Responsive Images';

export const ImageListXL = (args, context) => FranklinTemplate(app, args, context, decorate);

ImageListXL.parameters = {
  path: '/storybook/express/image-list.plain.html',
  selector: '.image-list',
  index: 2,
};

ImageListXL.storyName = 'XL';

export const ImageListL = (args, context) => FranklinTemplate(app, args, context, decorate);

ImageListL.parameters = {
  path: '/storybook/express/image-list.plain.html',
  selector: '.image-list',
  index: 3,
};

ImageListL.storyName = 'M';

export const ImageListM = (args, context) => FranklinTemplate(app, args, context, decorate);

ImageListM.parameters = {
  path: '/storybook/express/image-list.plain.html',
  selector: '.image-list',
  index: 4,
};

ImageListM.storyName = 'M';

export const ImageListM2 = (args, context) => FranklinTemplate(app, args, context, decorate);

ImageListM2.parameters = {
  path: '/storybook/express/image-list.plain.html',
  selector: '.image-list',
  index: 5,
};

ImageListM2.storyName = 'M - 2';

export const ImageListMS = (args, context) => FranklinTemplate(app, args, context, decorate);

ImageListMS.parameters = {
  path: '/storybook/express/image-list.plain.html',
  selector: '.image-list',
  index: 6,
};

ImageListMS.storyName = 'S';

export const ImageListXS = (args, context) => FranklinTemplate(app, args, context, decorate);

ImageListXS.parameters = {
  path: '/storybook/express/image-list.plain.html',
  selector: '.image-list',
  index: 7,
};

ImageListXS.storyName = 'XS';

/**
 * Default Config
 */
export default {
  title: 'Image List',
  parameters: {
    docs: {
      description: {
        component: 'An example Image List block',
      },
    },
  },
};
