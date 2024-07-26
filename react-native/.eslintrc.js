module.exports = {
  root: true,
  extends: ['@react-native'],
  plugins: ['import', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    node: true,
    es2020: true,
  },
  globals: {
    React: true,
    NodeJS: true,
    JSX: true,
  },
};
