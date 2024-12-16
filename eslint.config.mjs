import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'keyword-spacing': ['error', { before: true, after: true }],
      indent: ['error', 2],
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_$',
          ignoreEnums: true,
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'linebreak-style': ['error', 'unix'],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
];

export default eslintConfig;
