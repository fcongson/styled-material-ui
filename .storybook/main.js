const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.tsx", "../src/**/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/preset-typescript",
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, "../tsconfig.json")
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false // disables built-in colors in logger messages
        },
        include: [path.resolve(__dirname, "../src")]
      }
    },
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader")
        },
        // Optional
        {
          loader: require.resolve("react-docgen-typescript-loader")
        }
      ]
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};
