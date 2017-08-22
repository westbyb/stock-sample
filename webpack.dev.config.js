var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var APP_DIR = path.resolve(__dirname, 'app');
var BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
  entry: [
    './app/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js',
    publicPath: 'http://localhost:3000/'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        // Handles the loading of .jsx files
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          APP_DIR
        ],
        // Replaces the need for a .babelrc in root
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        include: [
          APP_DIR
        ],
        loaders: [
          'style',
          'css',
          'postcss',
          'resolve-url',
          'sass?outputStyle=expanded'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins:[
    new CopyWebpackPlugin([
      {
        from: 'app/index.html',
        to: 'index.html'
      }
    ])
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};