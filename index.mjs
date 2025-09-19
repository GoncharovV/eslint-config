import {
  commonConfig,
  importsConfig,
  jsdocConfig,
  reactConfig,
  stylisticConfig,
  typescriptConfig,
} from './configs/index.mjs';
import customRulesPlugin from './custom-rules/eslint-plugin-custom.cjs';


/** @type {import('eslint').Linter.Config[]} */
export const eslintConfig = [
  // NOTE:
  // "ignores" must be the ONLY key in object to handle directories
  {
    ignores: ['**/dist/**/*', '**/build/**/*', '**/prisma/**/*'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
  },
  ...commonConfig,
  ...typescriptConfig,
  ...importsConfig,
  stylisticConfig,
  jsdocConfig,


];

/** @type {import('eslint').Linter.Config[]} */
export const eslintConfigReact = [
  ...reactConfig,
  {
    plugins: {
      '@goncharovv': customRulesPlugin,
    },
    rules: {
      'goncharovv/no-jsx-adjacent-empty-lines': 'error',
    },
  },
];
