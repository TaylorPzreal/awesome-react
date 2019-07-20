const { HashedModuleIdsPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const { common } = require('./webpack.common');
const { root } = require('./root');

const useSourceMap = false; // should use source map

module.exports = merge(common, {
  mode: 'production',
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
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: false,
                },
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  sourceMap: useSourceMap,
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: useSourceMap,
                }
              }
            ],
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: false,
                },
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                  sourceMap: useSourceMap,
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: useSourceMap,
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: useSourceMap
                }
              }
            ],
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
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['dist/**/*'],
      verbose: true,
      dry: false
    }),

    new CopyPlugin(
      [
        {
          from: root('/dll'),
          to: root('/dist/dll'),
          toType: 'dir'
        },
        {
          from: root('/src/assets'),
          to: root('/dist/assets'),
          toType: 'dir'
        }
      ],
      {
        ignore: ['*.scss', '*.css', '**/fonts/*']
      }
    ),

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
      chunksSortMode: (chunk1, chunk2) => {
        const orders = ['inline', 'polyfills', 'vendor', 'app'];
        const order1 = orders.indexOf(chunk1.names[0]);
        const order2 = orders.indexOf(chunk2.names[0]);
        if (order1 > order2) {
          return 1;
        }
        if (order1 < order2) {
          return -1;
        }
        return 0;
      }
    }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'assets/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/css/[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
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
