import pluginReact from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.Config} */
export const reactCommonConfig = {
  plugins: {
    ...pluginReact.configs.flat.recommended.plugins,
  },
  rules: {
    ...pluginReact.configs.flat.recommended.rules,
    'react/button-has-type': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

/** @type {import('eslint').Linter.Config} */
export const reactHooksConfig = {
  plugins: {
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    ...reactHooksPlugin.configs.recommended.rules,
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'off',
  },
};


/** @type {import('eslint').Linter.Config[]} */
export const reactConfig = [
  reactCommonConfig,
  reactHooksConfig,
];
