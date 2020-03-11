const { DllPlugin, ProgressPlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { root } = require('./root');

const vendors = [
  'react',
  'react-dom',
  'react-router-dom',
];

module.exports = {
  mode: 'production',
  output: {
    path: root('dll'),
    filename: '[name].[chunkhash].dll.js',
    library: '[name]_[chunkhash]'
  },
  entry: {
    vendor: vendors
  },
  plugins: [
    new ProgressPlugin(),

    new DllPlugin({
      path: root('dll/vendor-manifest.json'),
      name: '[name]_[chunkhash]',
      context: __dirname
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      test: /\.js(\?.*)?$/i,
    })],
  },
};
