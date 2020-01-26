'use strict'
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    hot: true,
    port: 3030,
    watchOptions: {
      poll: true
    }
    // ### webpack: serve the below resource in case of 404
    // ,
    // historyApiFallback: {
    //   index: '/index.html'
    // }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});