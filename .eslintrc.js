module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'space-before-function-paren': 0
  },
  overrides: [
    {
      files: ['src/views/index.vue', 'src/views/**/index.vue'],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
