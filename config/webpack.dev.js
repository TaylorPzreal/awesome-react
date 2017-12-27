module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {},
  output: {},
  resolve: {},
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
};
