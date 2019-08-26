const path = require('path');
const globImporter = require('node-sass-glob-importer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, '/src/index.js'),
    editor: path.join(__dirname, '/src/editor.js'),
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js'
  },
  // The default devtool is `eval` which throws errors in IE.
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name]_[hash].[ext]',
            },
          },
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }, 
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options : {
              sourceMap: true,
              sourceMapContents: false,
              importer: globImporter()
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/assets'], {
      root: __dirname
    }),
    new MiniCssExtractPlugin()
  ]
};