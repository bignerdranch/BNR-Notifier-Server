module.exports = {
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  globals: {
    Promise: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
