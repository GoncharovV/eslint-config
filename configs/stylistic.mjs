import stylistic from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.Config} */
export const stylisticConfig = {
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    '@stylistic/array-bracket-newline': ['error', { multiline: true }],
    '@stylistic/array-bracket-spacing': ['error', 'never'],
    '@stylistic/array-element-newline': ['error', { consistent: true, multiline: true }],

    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/arrow-spacing': ['error', { before: true, after: true }],

    '@stylistic/block-spacing': ['error', 'always'],
    '@stylistic/brace-style': ['error', '1tbs'],

    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/comma-spacing': ['error', { before: false, after: true }],
    '@stylistic/comma-style': ['error', 'last'],

    '@stylistic/computed-property-spacing': ['error', 'never'],

    '@stylistic/dot-location': ['error', 'property'],

    '@stylistic/eol-last': ['error', 'always'],

    '@stylistic/function-call-spacing': ['error', 'never'],
    '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],

    '@stylistic/generator-star-spacing': ['error', 'after'],

    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

    '@stylistic/indent': [
      'error',
      2,
      {
        ImportDeclaration: 1,
        FunctionExpression: {
          parameters: 1,
        },
      },
    ],

    '@stylistic/jsx-quotes': ['error', 'prefer-double'],

    '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],

    '@stylistic/keyword-spacing': ['error', { before: true, after: true }],

    '@stylistic/linebreak-style': ['error', 'unix'],

    '@stylistic/lines-between-class-members': ['error', 'always'],

    '@stylistic/max-len': ['error', { code: 120, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true }],
    '@stylistic/max-statements-per-line': ['error', { max: 1 }],

    '@stylistic/multiline-ternary': ['error', 'always-multiline'],

    '@stylistic/new-parens': ['error', 'always'],

    '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    '@stylistic/no-confusing-arrow': ['error'],

    '@stylistic/no-extra-parens': ['error', 'functions'],

    '@stylistic/no-extra-semi': ['error'],

    '@stylistic/no-floating-decimal': ['error'],
    '@stylistic/no-mixed-operators': ['error'],
    '@stylistic/no-mixed-spaces-and-tabs': ['error'],
    '@stylistic/no-multi-spaces': ['error'],
    '@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1, maxEOF: 0 }],
    '@stylistic/no-trailing-spaces': ['error', { ignoreComments: true }],
    '@stylistic/no-whitespace-before-property': ['error'],

    '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    '@stylistic/one-var-declaration-per-line': ['error', 'initializations'],

    '@stylistic/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    '@stylistic/padded-blocks': ['error', { blocks: 'never', classes: 'always', switches: 'never' }],
    // TODO:
    '@stylistic/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: '*',
        prev: ['const', 'let', 'var'],
      },
      {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        next: 'return',
        prev: '*',
      },
    ],

    '@stylistic/quote-props': ['error', 'as-needed', { numbers: true }],
    '@stylistic/quotes': ['error', 'single'],

    '@stylistic/rest-spread-spacing': ['error', 'never'],

    '@stylistic/semi': ['error', 'always'],
    '@stylistic/semi-spacing': ['error', { before: false, after: true }],
    '@stylistic/semi-style': ['error', 'last'],

    '@stylistic/space-before-blocks': ['error', 'always'],
    '@stylistic/space-before-function-paren': [
      'error',
      {
        named: 'never',
        anonymous: 'never',
        asyncArrow: 'always',
      },
    ],
    '@stylistic/space-in-parens': ['error', 'never'],
    '@stylistic/space-infix-ops': ['error'],
    '@stylistic/space-unary-ops': ['error'],
    '@stylistic/spaced-comment': ['error', 'always'],
    '@stylistic/switch-colon-spacing': ['error'],
    '@stylistic/template-curly-spacing': ['error', 'never'],
    '@stylistic/template-tag-spacing': ['error', 'never'],

    '@stylistic/wrap-iife': ['error', 'inside'],

    // JSX

    '@stylistic/jsx-child-element-spacing': ['error'],

    '@stylistic/jsx-closing-bracket-location': ['error'],
    '@stylistic/jsx-closing-tag-location': ['error', 'tag-aligned'],

    '@stylistic/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
        propElementValues: 'always',
      },
    ],

    '@stylistic/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
    '@stylistic/jsx-curly-spacing': ['error', 'never'],
    '@stylistic/jsx-equals-spacing': ['error', 'never'],

    '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    '@stylistic/jsx-function-call-newline': ['error', 'multiline'],

    '@stylistic/jsx-indent': ['error', 2],
    '@stylistic/jsx-indent-props': ['error', 2],

    '@stylistic/jsx-max-props-per-line': ['error', { maximum: { single: 3, multi: 1 } }],

    // '@stylistic/jsx-newline': ['error'],		

    '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'non-jsx' }],

    '@stylistic/jsx-pascal-case': ['error', { allowLeadingUnderscore: true }],

    '@stylistic/jsx-props-no-multi-spaces': 'error',

    '@stylistic/jsx-self-closing-comp': [
      'error',
      {
        component: true,
        html: false,
      },
    ],

    '@stylistic/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],

    '@stylistic/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore',
        propertyValue: 'ignore',
      },
    ],


    // TS

    '@stylistic/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
        multilineDetection: 'brackets',
      },
    ],
    '@stylistic/type-annotation-spacing': ['error'],
  },
};
