import type { StorybookConfig } from "@storybook/nextjs";
import * as path from 'path';

const config: StorybookConfig = {
  staticDirs: ['../public','../.storybook/assets'],
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../');
    return config;
  },
};
export default config;
