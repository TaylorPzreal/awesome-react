const { root } = require('./root');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: root('src/index.jsx')
  },
  output: {
    filename: '[name].[chunkhash:20].bundle.js',
    chunkFilename: '[name].[chunkhash:20].chunk.js',
    path: root('dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    })
  ],
  devServer: {
    compress: true,
    port: 9000
  }
};
