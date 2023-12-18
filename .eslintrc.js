module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-inline-styles': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/no-unstable-nested-components': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-shadow': 'off',
    'no-undef': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-native/no-single-element-style-arrays': 2,
    'react/no-unescaped-entities': 'off',
    'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}],
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
          },
          {
            pattern: './**',
            group: 'index',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
