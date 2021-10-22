const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sveltePreprocess = require('svelte-preprocess');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {
  entry: {
    'bundle': './src/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      svelte: path.dirname(require.resolve('svelte/package.json'))
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.(svelte)$/,
        use: [
          {
            loader: 'svelte-loader',
            options: {
              emitCss: true,
              hotReload: false,
              preprocess: sveltePreprocess({
                postcss: true
              })
            }
          }
        ]
      },
      {
        test: /\.(css|pcss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
    new HtmlWebpackPlugin({
      base: '/'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'static',
          to: ''
        },
      ]
    })
  ]
};
