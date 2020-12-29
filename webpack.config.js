const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const isProduction = process.env.NODE_ENV === 'production';
const srcPath = path.resolve(__dirname, 'src');
const buildPath = path.resolve(__dirname, 'build');
const optimization = isProduction ? {
  minimizer: [
    // `...` is the webpack@5 syntax to extend existing minimizers (i.e. `terser-webpack-plugin`)
    `...`,
    new CssMinimizerPlugin(),
  ]} : {};

module.exports = {
  entry: `${srcPath}/index.tsx`,
  devtool: isProduction ? false : 'source-map',
  devServer: {
    contentBase: buildPath,
    open: true,
    compress: true,
    port: 3000,
    host: '0.0.0.0' // To expose contents via docker
  },
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.(woff(2)?|ico|png|jpg|jpeg|svg)$/i, type: 'asset', generator: { filename: 'resources/[name].[contenthash][ext]' }},
    ]
  },
  output: {
    filename: '[name].[contenthash].js',
    path: buildPath,
    publicPath: '',
  },
  optimization,
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
    new Dotenv({
      allowEmptyValues: false,
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      template: `${srcPath}/index.html`,
      filename: './index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
      Buffer: ['buffer', 'Buffer'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '.' },
      ],
    }),
    // Extracts CSS into separate files
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    // Moment.js is an extremely popular library that bundles large locale files
    // by default due to how Webpack interprets its code. This is a practical
    // solution that requires the user to opt into importing specific locales.
    // https://webpack.js.org/plugins/ignore-plugin/
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/
    }),
  ],
  resolve: {
    // Webpack 5 Change: Polyfill Node bindings. (https://webpack.js.org/blog/2020-10-10-webpack-5-release/#automatic-nodejs-polyfills-removed)
    // See https://github.com/webpack/webpack/pull/8460
    // See https://github.com/webpack/node-libs-browser/blob/master/index.js
    // required by @apidevtools/json-schema-ref-parser
    fallback: {
      'http': 'stream-http',
      'https': 'https-browserify',
      'buffer': 'buffer',
      'util': false // It seems it is not required.
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  }
}