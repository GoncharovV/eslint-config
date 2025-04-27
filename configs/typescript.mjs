import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export const typescriptConfig = [
  ...tseslint.configs.recommended,

  {
    rules: {
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
    },
  },
];
