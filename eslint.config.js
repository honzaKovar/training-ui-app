import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,

  // TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...prettierConfig.rules,

      // Prettier
      'prettier/prettier': 'error',

      // Style
      'arrow-body-style': ['warn', 'as-needed'],
      'brace-style': ['error', '1tbs'],
      camelcase: ['error', { properties: 'always' }],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      'comma-spacing': ['error', { before: false, after: true }],
      curly: ['error', 'multi-line'],
      'default-case': 'error',
      'func-call-spacing': ['error', 'never'],
      'id-length': [2, { exceptions: ['t', 'm', 'p', '_'] }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'max-len': [
        'error',
        {
          code: 160,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
        },
      ],
      'max-statements': ['warn', 20],
      'new-cap': ['error', { capIsNew: false }],
      'newline-after-var': ['error', 'always'],
      'no-await-in-loop': 'error',
      'no-bitwise': 'off',
      'no-console': ['warn', { allow: ['warn', 'error', 'info', 'group', 'groupEnd', 'table'] }],
      'no-cond-assign': ['error', 'always'],
      'no-else-return': 'error',
      'no-irregular-whitespace': 'error',
      'no-multi-spaces': 'error',
      'no-nested-ternary': 'error',
      'no-param-reassign': ['error', { ignorePropertyModificationsFor: ['el', 'ref', 'event'] }],
      'no-trailing-spaces': 'error',
      'no-unused-vars': 'off',
      'object-shorthand': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'prefer-template': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
      'sort-keys': ['warn', 'asc', { natural: true }],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'any', prev: 'directive', next: 'directive' },
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
        { blankLine: 'always', prev: '*', next: ['const', 'let', 'var', 'export'] },
        { blankLine: 'always', prev: ['const', 'let', 'var', 'export'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var', 'export'], next: ['const', 'let', 'var', 'export'] },
        { blankLine: 'always', prev: '*', next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'] },
        { blankLine: 'always', prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'], next: '*' },
        { blankLine: 'always', prev: '*', next: 'return' },
      ],

      // React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // TypeScript
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: { constructors: 'off' },
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: ['class'], format: ['StrictPascalCase'] },
        { selector: ['enumMember'], format: ['PascalCase'] },
        { selector: ['enum'], format: ['PascalCase'] },
        { selector: ['function'], format: ['PascalCase', 'camelCase'] },
        { selector: ['interface'], format: ['PascalCase'] },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/semi': ['error'],
      '@typescript-eslint/typedef': [
        'error',
        {
          parameter: false,
          variableDeclaration: false,
          variableDeclarationIgnoreFunction: true,
          memberVariableDeclaration: true,
        },
      ],
      '@typescript-eslint/unified-signatures': 'off',
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
    },
  },

  // JS/JSX files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      quotes: ['error', 'single', { avoidEscape: true }],
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  {
    ignores: ['dist/**', 'build/**', 'node_modules/**', 'webpack/**'],
  },
];
