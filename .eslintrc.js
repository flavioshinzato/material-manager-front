module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    "vue/no-unused-components": process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'max-len': 'warn',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
          'getters',
        ],
      },
    ],
    'no-shadow': [
      'error',
      {
        allow: [
          'state',
          'getters',
        ],
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },

};
