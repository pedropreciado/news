var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-3']
      }
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  },
  mode: 'development',
}