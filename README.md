# @goncharovv/eslint-config

### Base installation

```bash
npm install -D eslint @goncharovv/eslint-config
```

```js
// eslint.config.mjs

import { eslintConfig, eslintConfigReact } from '@goncharovv/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...eslintConfig,
	...eslintConfigReact,
];
```

### Include globals

```bash
npm install -D globals
```

```js
import globals from 'globals';

// Add to flat config
{ languageOptions: { globals: { ...globals.browser, ...globals.webextensions } } },
```