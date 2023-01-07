const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const { resolve } = require("path")
const tailwindcss = require("../tailwind.config")

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
        outline: false,
      },
    },
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
          postcssOptions: {
            plugins: {
              tailwindcss,
              autoprefixer: {
                // autoprefixer options
              },
            },
          },
        },
      },
    },
    "@storybook/addon-a11y",
    "storybook-css-modules",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  staticDirs: ["../public", { from: "../@generated", to: "/@generated" }],
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
        configFile: resolve(__dirname, "../tsconfig.json"),
      }),
    ]

    return config
  },
}
