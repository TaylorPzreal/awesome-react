const { root } = require('./root');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const flexbugsFixes = require('postcss-flexbugs-fixes');
const { NamedModulesPlugin } = require('webpack');
const merge = require('webpack-merge');
const { common } = require('./webpack.common');

module.exports = merge(common, {
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
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  sourceMap: true,
                  plugins: () => [
                    flexbugsFixes,
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 11' // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009'
                    })
                  ]
                }
              }
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
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  sourceMap: true,
                  plugins: () => [
                    flexbugsFixes,
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 11' // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009'
                    })
                  ]
                }
              },
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
    })
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
