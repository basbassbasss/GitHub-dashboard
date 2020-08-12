module.exports = {
  plugins: [
    'react',
  ],

  extends: [
    'airbnb',
    'react-app',
    'plugin:react/recommended',
  ],

  settings: {
    "import/resolver": {
      node: {
        "paths": ["src"]
      },
    },
  },

  rules: {
    'react/jsx-filename-extension': 0,
  },

  env: {
    browser: true,
    es6: true,
  },

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
