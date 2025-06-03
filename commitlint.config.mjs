/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['init', 'docs', 'chore', 'feat', 'fix', 'refactor', 'style', 'test'],
    ],
  },
};

export default config;
