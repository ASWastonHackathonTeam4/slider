const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // Use absolute paths to avoid the way that URLs are resolved by Chrome when
    // they're parsed from a dynamically loaded CSS blob.
    // NOTE: Only necessary in Dev.
    publicPath: 'http://localhost:8080/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.template.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        // NOTE: use jsx syntax for react.
        test: /\.jsx$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            // creates style nodes from JS strings
            loader: 'style-loader',
          }, {
            // translates CSS into CommonJS
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      }
    ],
  },
};

module.exports = config;
