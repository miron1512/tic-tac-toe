const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'app': [
      'react-hot-loader/patch',
      './src/index'
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './build',
    port: 3000,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new ExtractTextWebpackPlugin({
      filename: 'style.css',
    }),
  ]
};
