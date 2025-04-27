import js from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export const commonConfig = [
  js.configs.recommended,
  {
    rules: {
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: true,
        },
      ],
      'use-isnan': 'error',
    },
  },
];
