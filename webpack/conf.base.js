const webpack = require('webpack')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const exclude = /(node_modules|bower_components)/
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    libs: [
      'es6-promise/auto',
      'react',
      'react-dom',
      'react-router'
    ],
    entry: './src/entry'
  },
  output: {
    path: `${process.cwd()}/build`,
    publicPath: '/',
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/chunk.[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      './src',
      'node_modules'
    ],
    alias: {
      'babel-runtime/core-js/promise': 'es6-promise',
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/i,
      enforce: 'pre',
      loader: 'standard-loader',
      exclude
    }, {
      test: /\.jsx?$/i,
      exclude,
      loader: 'babel-loader',
      options: { cacheDirectory: true }
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.html$/i,
      loader: 'html-loader'
    }, {
      test: /\.ejs$/i,
      loader: 'ejs-loader'
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: !prod,
      minimize: prod,
      options: {
        context: __dirname,
        standard: {
          env: {
            browser: true,
            node: false
          },
          globals: ['React', 'import']
        }
      }
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['manifest', 'libs'].reverse(),
      minChunks: Infinity
    }),
    new InlineManifestWebpackPlugin()
  ]
}
