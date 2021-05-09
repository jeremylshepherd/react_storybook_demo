
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
      order: ['foundations', ['Introduction'], 'atoms', ['Button', 'Input', 'Label'], 'molecules', ['Card', 'Form', 'Header'], 'organisms', ['Page', 'Warpper']]
    },
  },
}