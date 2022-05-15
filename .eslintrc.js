// eslint-disable-next-line unicorn/prefer-module
const { resolve } = require
const OFF = 0
const ERROR = 2

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    webextensions: true
  },
  plugins: ['@typescript-eslint', 'react', 'unicorn', 'promise', 'prettier', 'simple-import-sort'],
  extends: [
    'standard',
    'plugin:eslint-comments/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect' // React version. "detect" automatically picks the version you have installed.
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.json']
      },
      typescript: {
        project: [resolve('./packages/sdk/tsconfig.json')]
      }
    }
  },
  rules: {
    'comma-dangle': ['error', 'never'],

    'max-len': ['error', { code: 120 }],

    'prettier/prettier': 'error',

    'no-use-before-define': OFF,

    'eslint-comments/disable-enable-pair': [ERROR, { allowWholeFile: true }],

    'import/extensions': OFF,

    'react/jsx-indent': [ERROR, 2],
    'react/jsx-filename-extension': [ERROR, { extensions: ['.ts', '.tsx', '.json', '.js'] }],
    'react/jsx-uses-react': OFF,
    'react/react-in-jsx-scope': OFF,
    'react/prop-types': OFF,

    'unicorn/filename-case': [
      ERROR,
      {
        cases: {
          camelCase: true,
          pascalCase: true
        }
      }
    ],
    'unicorn/import-style': [
      'error',
      {
        styles: {
          path: {
            named: true
          }
        }
      }
    ],
    'unicorn/no-array-for-each': OFF,
    'unicorn/no-null': OFF,
    'unicorn/no-process-exit': OFF,
    'unicorn/prefer-module': OFF,
    'unicorn/prefer-node-protocol': OFF,
    'unicorn/prevent-abbreviations': OFF,

    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/no-explicit-any': OFF,
    '@typescript-eslint/no-non-null-assertion': OFF,
    '@typescript-eslint/no-useless-constructor': ERROR,

    'func-names': OFF,
    'lines-between-class-members': OFF,
    'max-classes-per-file': OFF,
    'no-console': OFF,
    'no-empty': OFF,
    'no-underscore-dangle': OFF,
    'no-unused-expressions': OFF,
    'no-useless-constructor': OFF,
    semi: [ERROR, 'never'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'node/no-callback-literal': OFF,

    // simple-import-sort
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@shared)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^@(/.*|$)', '^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$']
        ]
      }
    ],
    'simple-import-sort/exports': 'warn'
  },
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        'import/no-duplicates': OFF
      }
    },
    {
      files: ['server/**/*.ts'],
      rules: {
        'global-require': OFF,

        '@typescript-eslint/no-var-requires': OFF,

        'import/no-dynamic-require': OFF,
        'import/no-extraneous-dependencies': OFF
      }
    }
  ]
}
