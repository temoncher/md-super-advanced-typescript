/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/** @type {LinterConfig} */
module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.json'],
  },
  extends: ['temoncher/typescript'],
  rules: {
    '@typescript-eslint/no-unused-vars': 0,

    'array-element-newline': 0,
    'no-console': 1,
    'max-classes-per-file': 0,
  },
};
