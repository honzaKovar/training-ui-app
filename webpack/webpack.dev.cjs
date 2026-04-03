const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.cjs');

const devConfig = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.jsx'),
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, '../public'),
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true,
    proxy: [
      {
        context: ['/api/geo'],
        target: 'https://freeipapi.com',
        changeOrigin: true,
        pathRewrite: { '^/api/geo': '/api/json' },
        secure: true,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
};

// Merge common and dev configs
module.exports = merge(commonConfig, devConfig);
