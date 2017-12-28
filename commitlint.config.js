module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: [
    {
      'type-enum': [0, 'always', ['add', 'update', 'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert']],
    },
  ],
};
