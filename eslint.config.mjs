import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

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
      js: pluginJs,           // JavaScript rules
      react: pluginReact,     // React-specific rules
    },

    // Extend configurations for Prettier
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier', // Ensures compatibility with Prettier
    ],

    // Define ESLint rules
    rules: {
      ...pluginJs.configs.recommended.rules,           // JavaScript recommended rules
      ...tseslint.configs.recommended.rules,           // TypeScript recommended rules
      ...pluginReact.configs.flat.recommended.rules,   // React-specific rules

      // Example React rule
      'react/display-name': 'warn',

      // Other custom rules
    },
  },
];
