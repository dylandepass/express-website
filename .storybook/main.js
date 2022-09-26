module.exports = {
  "stories": [
    "../express/blocks/**/*.stories.mdx",
    "../express/blocks/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@dylandepass/franklin-storybook-addon'
  ],
  "framework": "@storybook/html",
  "staticDirs": [
    { from: '../express/scripts', to: '/express/scripts' }, 
    { from: '../express/styles', to: '/express/styles' }, 
    { from: '../express/icons', to: '/express/icons' }
  ],
}