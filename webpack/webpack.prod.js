const { resolve } = require('path')
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: false, // webpack recommends 'source-map' instead of fale (no map)
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
    runtimeChunk: { name: 'runtime' }
  },
  devtool: false,
  output: {
    path: resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].[contenthash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { importLoaders: 2, sourceMap: false, modules: { auto: true } } },
          'postcss-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles/[name].[contenthash].css', chunkFilename: '[id].css', }),
  ]
});
