module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'react-native/react-native': true,
  },
  rules: {

    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
    'react-native/sort-styles': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-restricted-syntax': 'off',
    'prefer-if-over-switch': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-spacing': 'off',
    'indent': [
      'off',
      2,
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};