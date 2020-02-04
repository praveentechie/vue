'use strict'
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// ### webpack plugin: terser-webpack-plugin minimize the file size
const TerserPlugin = require('terser-webpack-plugin');

const PROD_CONFIG = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Vue app',
      filename: 'index.html', // default value
      template: 'index.html',
      inject: true,
      excludeChunks: [ 'server' ]
    }),
    // ### webpack plugin: copy files too required directory
    // add required fonts here
    new CopyPlugin([
      { from: './src/libs/font-awesome/fonts', to: './fonts' },
    ]),
    // TODO: not full functional
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css', // ### webpack: contenthash - long term hashing
    })
  ],
  optimization: {
    minimizer: [
      // TODO: not full functional
      new TerserPlugin({
        // run minification in parallel
        parallel: true,
        extractComments: false
      }),
    ],
  }
});

module.exports = PROD_CONFIG;