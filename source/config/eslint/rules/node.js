module.exports = {
  env: {
    node: true
  },

  rules: {
    // enforce return after a callback
    'callback-return': 'error',

    // require all requires be top-level
    // http://eslint.org/docs/rules/global-require
    'global-require': 'off',

    // enforces off handling in callbacks (node environment)
    'handle-callback-err': 'error',

    // disallow mixing regular variable and require declarations
    'no-mixed-requires': ['off', false],

    // disallow use of new operator with the require function
    'no-new-require': 'off',

    // disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'off',

    // disallow use of process.env
    'no-process-env': 'off',

    // disallow process.exit()
    'no-process-exit': 'off',

    // restrict usage of specified node modules
    'no-restricted-modules': 'off',

    // disallow use of synchronous methods (off by default)
    'no-sync': 'off'
  }
}
