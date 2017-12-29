const { root } = require('./root');
const { HashedModuleIdsPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const merge = require('webpack-merge');
const { common } = require('./webpack.common');

const useSourceMap = false;  // should use source map

module.exports = merge(common, {
  bail: true,
  recordsPath: root('docs/build-records.json'),
  devtool: useSourceMap ? 'source-map' : false, // deploy as false

  output: {
    filename: '[name].[chunkhash:20].bundle.js',
    chunkFilename: '[name].[chunkhash:20].chunk.js',
    path: root('dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  compact: true
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
            use: ExtractTextPlugin.extract({
              fallback: {
                loader: 'style-loader',
                options: {
                  hmr: false
                }
              },
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    minimize: true,
                    sourceMap: useSourceMap,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    ident: 'postcss',
                    sourceMap: useSourceMap,
                    plugins: () => [
                      require('postcss-flexbugs-fixes'),
                      autoprefixer({
                        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 11'],
                        flexbox: 'no-2009'
                      })
                    ]
                  }
                }
              ]
            })
          },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: {
                loader: 'style-loader',
                options: {
                  hmr: false
                }
              },
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 2,
                    minimize: true,
                    sourceMap: useSourceMap,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    ident: 'postcss',
                    sourceMap: useSourceMap,
                    plugins: () => [
                      require('postcss-flexbugs-fixes'),
                      autoprefixer({
                        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 11'],
                        flexbox: 'no-2009'
                      })
                    ]
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: useSourceMap
                  }
                }
              ]
            })
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
    new CleanWebpackPlugin(['dist/**/*'], {
      root: root(),
      exclude: [],
      verbose: true,
      dry: false
    }),

    new HashedModuleIdsPlugin(),

    new HtmlWebpackPlugin({
      inject: true,
      template: root('src/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      chunksSortMode: function(chunk1, chunk2) {
        const orders = ['inline', 'polyfills', 'vendor', 'app'];
        var order1 = orders.indexOf(chunk1.names[0]);
        var order2 = orders.indexOf(chunk2.names[0]);
        if (order1 > order2) {
          return 1;
        } else if (order1 < order2) {
          return -1;
        } else {
          return 0;
        }
      }
    }),

    new ExtractTextPlugin({
      filename: 'assets/css/[name].[contenthash:8].css'
    }),

    new UglifyJsPlugin({
      test: /\.js$/i,
      extractComments: false,
      sourceMap: useSourceMap,
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
        mangle: {
          safari10: true
        },
        compress: {
          comparisons: false
        }
      }
    }),

    new ManifestPlugin({
      fileName: 'app-manifest.json'
    })
  ]
});
