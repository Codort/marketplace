module.exports = {
  root: true,
  extends: ['@nuxt', 'prettier'],
  rules: {
    // Global
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'no-lonely-if': 'error',
    // Vue
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 0,
    'vue/html-indent': ['error', 2, { closeBracket: 0 }],
    'vue/script-indent': ['error', 2, { baseIndent: 0 }],
    // Typescript
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  },
};
