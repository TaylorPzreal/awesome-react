# awesome-react

Front-end with React@^16

## Installation And Usage

```bash
git clone git@github.com:TaylorPzreal/awesome-react.git

cd awesome-react
yarn install

yarn start # start a dev server
yarn start-browser # start a dev server and open default browser
yarn build # build for production
yarn test # run test
yarn lint # run lint jsx
yarn format # format code: .jsx?, .md, .s?css

yarn server # test build folder, here is dist folder.
```

## Configuration

* npm init & gitignore
* File structure
* commitlint
* webpack
* eslint
* format(prettier)
* Test

## Commitlint

> The most common commit conventions follow this pattern:

```md
type: subject(lower-case)

<!-- add one space line -->

body?

<!-- add one space line -->

footer?
```

type includes:

```json
{
  'add',
  'update',
  'feat',
  'fix',
  'docs',
  'style',
  'refactor',
  'test',
  'revert'
}
```

You could config vim as default editor for git commit, just do:

```bash
git config --global core.editor "vim"
```

## Code styles

* [React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

## Problems

[ ] Fonts can't load
[ ] Jest test conf
[ ] redux
[ ] router
[ ] cssnext

## MIT License

Copyright (c) 2017 TaylorPzreal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
