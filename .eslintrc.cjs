module.exports = {
  // Specifies the ESLint parser for TypeScript
  parser: '@typescript-eslint/parser',
  // Specifies the ESLint plugins to use
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  // Extends the recommended rules from ESLint, React, and TypeScript
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  // Specifies the environment for your code
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detects the React version
    },
  },
  rules: {
    // Add custom rules or override existing ones here
    // For example:
    // 'react/prop-types': 'off', // Not needed with TypeScript
    // '@typescript-eslint/explicit-module-boundary-types': 'off', // You might not want to enforce explicit return types on all functions
  },
};
