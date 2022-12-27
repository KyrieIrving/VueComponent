module.exports = {
    root: true,
    env: {
        'browser': true,
        'es2021': true,
      node: true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
      'no-console': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'generator-star-spacing': 'off',
      'no-mixed-operators': 0,
      'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
      'vue/attribute-hyphenation': 0,
      'vue/html-self-closing': 0,
      'vue/component-name-in-template-casing': 0,
      'vue/html-closing-bracket-spacing': 0,
      'vue/singleline-html-element-content-newline': 0,
      'vue/no-unused-components': 0,
      'vue/multiline-html-element-content-newline': 0,
      'vue/no-use-v-if-with-v-for': 0,
      'vue/html-closing-bracket-newline': 0,
      'vue/no-parsing-error': 0,
      'no-tabs': 0,
      'quotes': [
        2,
        'single',
        {
          'avoidEscape': true,
          'allowTemplateLiterals': true
        }
      ],
      'semi': [
        2,
        'never',
        {
          'beforeStatementContinuationChars': 'never'
        }
      ],
      'no-delete-var': 2,
      'prefer-const': [
        2,
        {
          'ignoreReadBeforeAssign': false
        }
      ],
      'template-curly-spacing': 'off',
      'indent': 'off'
    },
    'parserOptions': {
        'ecmaVersion': 13,
        'sourceType': 'module',
        'ecmaFeatures': {
            'modules': true,
            'jsx': true
        },
        'requireConfigFile': false,
        'parser': '@babel/eslint-parser'
    },
    'plugins': [
        'vue',
        '@typescript-eslint'
    ],
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)'
        ],
        env: {
          jest: true
        }
      }
    ]
  }