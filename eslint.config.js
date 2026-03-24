import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 1. This replaces .eslintignore
  {
    ignores: ['node_modules/**', 'coverage/**', 'dist/**'],
  },

  // 2. Base ESLint recommended rules
  pluginJs.configs.recommended,

  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      // 3. This tells ESLint you are using Node and Jest
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // 4. This connects Prettier to ESLint
      'prettier/prettier': 'error',
      'no-console': 'off',
      'no-unused-vars': 'warn',
    },
  },

  // 5. This turns off ESLint rules that might fight with Prettier
  prettierConfig,
];
