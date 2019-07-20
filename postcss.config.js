module.exports = ({ env }) => ({
  parser: 'postcss-js',
  exec: true,
  sourceMap: env === 'development',
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    cssnano: {},
  },
});
