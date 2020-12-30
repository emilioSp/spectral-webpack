const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  devServer: {
    contentBase: buildPath,
    open: true,
    compress: true,
    port: 3000,
    host: '0.0.0.0'
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
    ]
  },
  output: {
    filename: '[name].[contenthash].js',
    path: buildPath,
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.json'],
    fallback: {
      'vm': false,
      'fs': false
    }
  }
}