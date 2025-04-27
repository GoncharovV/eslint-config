import {
  commonConfig,
  importsConfig,
  reactConfig,
  stylisticConfig,
  typescriptConfig,
} from './configs/index.mjs';


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
];

/** @type {import('eslint').Linter.Config[]} */
export const eslintConfigReact = [...reactConfig];
