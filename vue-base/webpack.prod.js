'use strict'
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// ### webpack plugin: terser-webpack-plugin minimize the file size
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        // run minification in parallel
        parallel: true,
        extractComments: false
      }),
    ],
  }
});