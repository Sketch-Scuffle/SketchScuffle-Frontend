import type { Preview } from "@storybook/react";
import "@/styles/utilties/variables/variables.scss";
import "@/styles/globals.scss";
const preview: Preview = {
    parameters: {
      backgrounds: {
        default: 'dark',
        values: [
          {
            name: 'light',
            value: '#FFEEFF',
          },
          {
            name: 'dark',
            value: '#4c4e50',
          },
        ],
      },

    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
