const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfBase = require('./conf.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(webpackConfBase, {
  cache: true,
  devtool: '#source-map',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.ejs',
      chunks: ['dev', 'manifest', 'libs', 'entry']
    })
  ]
})
