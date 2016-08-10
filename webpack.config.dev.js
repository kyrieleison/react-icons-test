const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js',
  },
  output: {
    filename: '[name].js',
    publicPath: 'http://localhost:3000/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['css'])
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css', 'sass'])
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    stats: {
      chunkModules: false
    }
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};
