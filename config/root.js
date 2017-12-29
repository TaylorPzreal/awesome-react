const path = require('path');

const _root = path.resolve(__dirname, '..');

function root(...args) {
  return path.join(...[_root].concat(args));
}

exports.root = root;
