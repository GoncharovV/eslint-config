import globals from 'globals';

import { eslintConfig, eslintConfigReact } from './index.mjs';


export default [...eslintConfig, ...eslintConfigReact, { languageOptions: { globals: { ...globals.node } } }];
