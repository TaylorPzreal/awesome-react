module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['add', 'update', 'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert']],
    'subject-case': [2, 'always', ['lower-case', 'sentence-case']],
  },
};
