module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['svelte'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte/svelte'
    }
  ]
}
