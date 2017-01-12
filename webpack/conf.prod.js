const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfBase = require('./conf.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(webpackConfBase, {
  output: {
    filename: 'assets/js/[name].[chunkhash:8].js',
    chunkFilename: 'assets/js/[name].[chunkhash:8].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
        collapse_vars: true,
        reduce_vars: true
      },
      output: { comments: false }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 }),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.ejs',
      chunks: ['manifest', 'libs', 'entry']
    }),
    new BundleAnalyzerPlugin()
  ]
})
