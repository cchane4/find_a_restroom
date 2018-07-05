const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./app/index.js",
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties',
                     'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname,
    filename: "bundle.js"
  }
};