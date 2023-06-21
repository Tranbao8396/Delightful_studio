const webpack = require("webpack");
const WebpackNotifierPlugin = require("webpack-notifier");
const TerserPlugin = require("terser-webpack-plugin");
var path = require("path");

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
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         { loader: 'style-loader' },
  //         {
  //           loader: 'css-loader',
  //           options: {
  //             modules: true,
  //           },
  //         },
  //         { loader: 'sass-loader' },
  //       ],
  //     },
  //   ],
  // },
  resolve: {
    alias: {
      // bind version of jquery-ui
      "jquery-ui": "jquery-ui/dist/jquery-ui.js",
      // bind to modules;
      modules: path.join(__dirname, "node_modules"),
    }
  }
};
