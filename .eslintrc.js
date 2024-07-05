module.exports = {
    env: {
      node: true, // Set environment to Node.js
      es6: true,
      jest: true,
    },
    extends: [
      'airbnb-base', // Airbnb base config for JavaScript
      'plugin:jest/all', // Jest plugin for linting test files
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
      'max-classes-per-file': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
    overrides: [
      {
        files: ['*.js'],
        excludedFiles: 'babel.config.js',
      }
    ]
  };
  