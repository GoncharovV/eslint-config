# @goncharovv/eslint-config

## Frontend Config

For developing React applications with TypeScript

```bash
npm install -D eslint globals @goncharovv/eslint-config
```

```js
// eslint.config.mjs

import globals from 'globals';
import { eslintConfig, eslintConfigReact } from '@goncharovv/eslint-config';


/** @type {import('eslint').Linter.Config[]} */
export default [
  ...eslintConfig,
  ...eslintConfigReact,

  { languageOptions: { globals: { ...globals.browser } } },
];

```

## Minimal Config

Without rules for React and browser globals

```bash
npm install -D eslint @goncharovv/eslint-config
```

```js
// eslint.config.mjs

import { eslintConfig } from '@goncharovv/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...eslintConfig,
];
```