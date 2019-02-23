module.exports = {
    extends: [
      'airbnb',
      'plugin:flowtype/recommended',
      'plugin:react/recommended',
      'prettier',
      'prettier/flowtype',
      'prettier/react'
    ],
    "globals": {
      "global": false,
      "GLOBAL": false,
      "console": false
    },
    plugins: ['jsx-a11y', 'flowtype', 'react', 'prettier', 'react-native'],
    parserOptions: {
      ecmaVersion: 2016,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    env: {
      jest: true,
      es6: true,
      node: true
    },
    rules: {
      'react/jsx-no-bind': 0,
      'react-native/no-unused-styles': 1,
      'import/no-unresolved': 0,
      'react/jsx-filename-extension': 0,
      'no-console': 0,
      'one-var': 0,
      'react/forbid-prop-types': 0,
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            'setupJest.js',
            'App/Services/mock.js',
            '**/*.test.js',
            '**/*.stories.js'
          ]
        }
      ],
      camelcase: 0,
      'import/first': 0,
      'global-require': 0,
      'jsx-a11y/href-no-hash': 0,
      'react/require-default-props': 0,
      'react/display-name': 0,
      'react/prop-types': 0,
      'react/no-array-index-key': 0,
      'import/extensions': [
        'error',
        'never',
        {
          js: 'never',
          jsx: 'never'
        }
      ],
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          jsxBracketSameLine: true,
          singleQuote: true,
          semi: false
        }
      ]
    }
  }
  