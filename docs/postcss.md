# postcss

> [postcss](https://postcss.org/)

```bash
yarn add cssnano postcss-loader postcss-preset-env postcss-js postcss-import
```

Add __postcss.config.js__ file

```js
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
```
