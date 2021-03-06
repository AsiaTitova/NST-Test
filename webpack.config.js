"use strict";

const path = require('path');
const publicDirPath = path.resolve(__dirname, `public`);

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: publicDirPath,
    publicPath: '/'
  },
  devServer: {
    contentBase: publicDirPath,
    open: true,
    compress: true,
    port: 1337,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3001"
    }
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  devtool: 'source-map',
};
