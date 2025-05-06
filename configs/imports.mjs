import { builtinModules as _builtinModules } from 'module';

import importPlugin from 'eslint-plugin-import';
import importNewlinesPlugin from 'eslint-plugin-import-newlines';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

/**
 * Packages which should be imported as soon as possible
 * 
 * Examples:
 * ```ts
 * import "reflect-metadata"
 * ```
 */
const asSoonAsPossible = `${['reflect-metadata', 'dotenv'].join('|')}`;

/**
 * Builtin NodeJS modules
 * 
 * Examples:
 * ```ts
 * import { ... } from "fs"
 * import { ... } from "path" 
 * ```
 */
const builtinModules = new RegExp(`^(${_builtinModules.join('|')})(/.*|$)`);

/**
 * CSS imports `"*.(s?)css"`
 * 
 * Examples:
 * ```ts
 * import './index.css'
 * import styles from "./component.module.css""
 * ```
 */
const styles = /^.+\.s?css$/;

/**
 * Imports from `"react"`
 * 
 * Examples: 
 * ```ts
 * import React, { FC, useCallback } from 'react';
 * ```
 */
const react = /^react/;

/**
 * External libraries `\w`
 * 
 * Examples:
 * ```ts
 * import { ... } from "mobx"
 * import { ... } from "mobx-react-lite"
 * ```
 */
const externalLibraries = /^\w/;

/**
 * Libraries with `"@"`
 * 
 * Examples:
 * ```ts
 * import { ... } from "@gravity-ui/uikit"
 * import { ... } from "@tanstack/react-query"
 * ```
 */
const librariesWithAtSign = /^@(?!\/)\w/;

/**
 * Path alias imports `"@/**"`
 *  
 * Examples: 
 * ```ts
 * import { ... } from "@/shared/libs/di"
 * ```
 */
const aliasImports = /^@\/\w/;

/**
 * Any assets ending with `"json|svg|jpeg|png|jpg"`
 * 
 * Examples:
 * ```ts
 * import data from "./data.json"
 * import icon from "@/assets/icon.svg"
 * ```
 */
const assets = /^.*\.(json|svg|jpeg|png|jpg)$/;

/**
 * Relative imports `".(.?)/**"` except `assets` and `css`
 * 
 * Examples:
 * ```ts
 * import { ... } from "./module"
 * import { ... } from "../module"
 * import { ... } from "../a/b/c/index"
 * ```
 */
const relativeImports = new RegExp(
  [
    `(?!${assets.source})`,
    `(?!${styles.source})`,
    '^\\.\\.?\\/.*$',
  ].map(String).join(''),
);

/**
 * Local i18n keysets `.(.?)/**i18n`
 * 
 * Examples:
 * ```
 * import { ... } from "./i18n"
 * import { ... } from "../i18n"
 * import { ... } from "./Component.i18n"
 * ```
 */
const translations = /^\.\.?\/.*i18n$/;

const regexpsMatrix = [
  [asSoonAsPossible],
  [builtinModules],

  [react, externalLibraries, librariesWithAtSign],

  [aliasImports],

  [relativeImports],

  [assets],

  [styles],

  [translations],

];

const groups = regexpsMatrix.map((row) => row.map((value) => {
  if (value instanceof RegExp) {
    return String(value).slice(1, -1);
  }

  return value;
}));

/** @type {import('eslint').Linter.Config} */
export const importsSortingConfig = {
  plugins: {
    'simple-import-sort': simpleImportSortPlugin,
  },
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': ['error', { groups }],
  },
};

/** @type {import('eslint').Linter.Config} */
export const importsPluginConfig = {
  plugins: {
    import: importPlugin,
  },
  rules: {
    'import/no-absolute-path': 'error',
    // NOTE: These rules are taking to much time while linting
    // 'import/no-cycle': 'error',
    // 'import/no-unresolved': 'error',
    'import/no-useless-path-segments': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    'import/first': 'error',
    'import/newline-after-import': ['error', { count: 2 }],
    'import/no-duplicates': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  languageOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};

/** @type {import('eslint').Linter.Config} */
export const noDefaultExportsConfig = {
  files: ['src/**'],
  ignores: ['pages/**', 'app/**'],
  rules: {
    'import/no-default-export': 'error',
  },
};

/** @type {import('eslint').Linter.Config} */
export const importsNewlinesConfig = {
  plugins: {
    'import-newlines': importNewlinesPlugin,
  },
  rules: {
    'import-newlines/enforce': [
      'error',
      {
        items: 7,
        'max-len': 100,
      },
    ],
  },
};

/** @type {import('eslint').Linter.Config[]} */
export const importsConfig = [
  importsSortingConfig,
  importsPluginConfig,
  noDefaultExportsConfig,
  importsNewlinesConfig,
];
