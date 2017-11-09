module.exports = {
  extends: [
    './rules/node',
    './rules/style',
    './rules/best-practices',
    './rules/errors',
    './rules/variables',
    './rules/es6',
    './rules/strict',
    './rules/imports'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  }
}
