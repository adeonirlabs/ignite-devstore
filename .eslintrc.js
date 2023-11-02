module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/next',
  ].map(require.resolve),
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: require.resolve('./tsconfig.json'),
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
        endOfLine: 'auto',
        plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-packagejson'],
      },
    ],
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'eslint-comments/require-description': 'off',
    'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/newline-after-import': 'warn',
    'import/order': ['error', { 'newlines-between': 'always', alphabetize: { order: 'asc', orderImportKind: 'asc' } }],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
    'react/no-unknown-property': 'error',
    'import/no-default-export': 'off',
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'if', next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: 'directive', next: '*' },
    ],
  },
  overrides: [
    {
      files: ['src/app/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
}
