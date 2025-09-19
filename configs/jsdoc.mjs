import { jsdoc } from 'eslint-plugin-jsdoc';


export const jsdocConfig = jsdoc({
  rules: {
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-line-alignment': 'error',
  },
});
