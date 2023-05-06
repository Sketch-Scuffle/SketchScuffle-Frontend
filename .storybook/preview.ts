import type { Preview } from "@storybook/react";
import "@/styles/utilties/variables/variables.scss";
import "@/styles/globals.scss";
const preview: Preview = {
  parameters: {
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
