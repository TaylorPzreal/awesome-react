# awesome-react

Front-end with React@^16.13.0

![GitHub package.json version](https://img.shields.io/github/package-json/v/TaylorPzreal/awesome-react.svg)
[![Coverage Status](https://coveralls.io/repos/github/TaylorPzreal/awesome-react/badge.svg?branch=master)](https://coveralls.io/github/TaylorPzreal/awesome-react?branch=master)
[![CircleCI](https://circleci.com/gh/TaylorPzreal/awesome-react.svg?style=svg)](https://circleci.com/gh/TaylorPzreal/awesome-react)

> Recommend you use cli to create project [create-awesome-react](https://github.com/TaylorPzreal/create-awesome-react)

## Installation And Usage

```bash
git clone git@github.com:TaylorPzreal/awesome-react.git

cd awesome-react
yarn install

yarn start # start a dev server
yarn start-browser # start a dev server and open default browser
yarn build # build for production
yarn build-analyse # build and generate a stats.json
yarn dll # generate DllPlugin
yarn test # run test
yarn lint # run lint jsx
yarn format # format code: .jsx?, .md, .s?css
yarn server # test build folder, here is dist folder.
```

You could config vim as default editor for git commit, just do:

```bash
git config --global core.editor "vim"
```

## Features

- npm init & gitignore
- File structure
- commitlint
- eslint
- format(prettier)
- webpack
- Test
- Router
- Common http request and interceptor
- webpack dll
- precommit format

## Code styles

- [React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

## Problems

- [x] Fonts can't load # Make webpack css-loader module: false, [More about css-modules](https://github.com/css-modules/css-modules)
- [x] Jest test conf # Make ReactDom to ReactDOM, word error.
- [x] react-router@^4 # [More about dynamic-import](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/code-splitting.md)

## More info

- [ESDoc](./docs/esdoc.md)
- [postcss](./docs/postcss.md)
- [6 pro tips for React](./docs/best-practice.md)

## MIT License

Copyright (c) 2017-2020 TaylorPzreal
