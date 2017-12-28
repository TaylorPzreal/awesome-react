const { root } = require('./root');
const { ProgressPlugin, BannerPlugin } = require('webpack');

exports.common = {
  entry: {
    app: root('src/index.jsx')
  },
  output: {
    filename: '[name].[chunkhash:20].bundle.js',
    chunkFilename: '[name].[chunkhash:20].chunk.js',
    path: root('dist'),
    publicPath: '/'
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
    new BannerPlugin('©2017 honeymorning.com taylorpzreal@gmail.com')
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
}
