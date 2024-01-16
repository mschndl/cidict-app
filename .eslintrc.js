module.exports = {
  root: true,
  extends: ['universe/native'],
  plugins: ['import'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    // this is for sorting WITHIN an import
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    // this is for sorting imports
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
