import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

export default [
  {
    // Specify the files to lint
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

    // Set global browser environment
    languageOptions: {
      globals: globals.browser,
    },

    // Include necessary plugins
    plugins: {
      prettier, // Integrate Prettier for formatting
    },

    // Define ESLint rules
    rules: {
      ...pluginJs.configs.recommended.rules, // JavaScript recommended rules
      ...tseslint.configs.recommended.rules, // TypeScript recommended rules
      ...pluginReact.configs.flat.recommended.rules, // React-specific rules

      // Prettier rule to enforce formatting
      'prettier/prettier': 'error',
    },
  },
];
