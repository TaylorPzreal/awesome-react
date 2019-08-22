const { DllPlugin, ProgressPlugin } = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { root } = require('./root');

const vendors = [
  'react',
  'react-dom'
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

    new UglifyJsPlugin({
      test: /\.js$/i,
      extractComments: false,
      sourceMap: false,
      cache: false,
      parallel: true,
      uglifyOptions: {
        output: {
          ascii_only: true,
          comments: false
        },
        ecma: 5,
        warnings: false,
        ie8: false,
        compress: {
          comparisons: false
        }
      }
    }),
  ]
};
