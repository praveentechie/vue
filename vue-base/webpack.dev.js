'use strict'
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // ### webpack: to track error using original file..not to be used in prod
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
    // ### webpack: HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      title: 'Vue app',
      filename: 'index.html', // default value
      template: 'index.html',
      inject: true,
      excludeChunks: [ 'server' ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      hmr: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});