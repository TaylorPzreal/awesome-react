const { root } = require('./root');
const { ProgressPlugin, BannerPlugin, DllReferencePlugin } = require('webpack');
const InterpolateWebpackPlugin = require('interpolate-webpack-plugin');

const dllVendor = require(root('dll/vendor-manifest.json'));

exports.common = {
  entry: {
    app: root('src/index.jsx')
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    strictExportPresence: true,
  },
  plugins: [
    new ProgressPlugin(),

    new InterpolateWebpackPlugin([{
      key: 'INJECT_DLL',
      value: root('dll/*.js'),
      type: 'PATH'
    }]),

    new DllReferencePlugin({
      context: __dirname,
      manifest: dllVendor
    }),

    new BannerPlugin('©2017 honeymorning.com taylorpzreal@gmail.com')
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};
