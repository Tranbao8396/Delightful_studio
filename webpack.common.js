const webpack = require("webpack");
const WebpackNotifierPlugin = require("webpack-notifier");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: `/_js/index.js`,
  output: {
    path: `${__dirname}/assets/js`,
    filename: "index.js",
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new WebpackNotifierPlugin({
      alwaysNotify: true,
    }),
  ],
};
