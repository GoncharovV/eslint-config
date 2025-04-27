# @goncharovv/eslint-config

### Frontend Config

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

### Minimal Config

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