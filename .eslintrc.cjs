module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:react/jsx-runtime"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  "settings": {
    "react": {
      "version": "detect" // O ESLint irá detectar automaticamente a versão do React
    }
  }
}
