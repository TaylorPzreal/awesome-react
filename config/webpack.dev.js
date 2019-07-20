const HtmlWebpackPlugin = require('html-webpack-plugin');
const { NamedModulesPlugin } = require('webpack');
const merge = require('webpack-merge');
const { common } = require('./webpack.common');
const { root } = require('./root');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',

  output: {
    pathinfo: true,
    filename: '[name].[hash:20].bundle.js',
    chunkFilename: '[name].[hash:20].chunk.js',
    path: root('dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true
                }
              },
              'eslint-loader'
            ]
          },
          {
            test: /\.(png|jpg|jpeg|gif|bmp)$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/[name].[hash:8].[ext]'
            }
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 1,
                }
              },
              'postcss-loader'
            ]
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                }
              },
              'postcss-loader',
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          {
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new NamedModulesPlugin(),

    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
  ],
  devServer: {
    compress: true,
    port: 9000,
    historyApiFallback: true,
    overlay: true
  },
  performance: {
    hints: false
  }
});
