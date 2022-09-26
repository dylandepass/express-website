export const parameters = {
  host: 'https://main--helix-playground--dylandepass.hlx.page',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}