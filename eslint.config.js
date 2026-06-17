const { createConfigForNuxt } = require('@nuxt/eslint-config');

module.exports = createConfigForNuxt({
  ignores: [
    '.nuxt/',
    '.output/',
    'dist/',
    'node_modules/',
    'lighthouse-audit.js',
    'lighthouse-full-audit.js',
  ],
}).append({
  rules: {
    'no-console': 'off',
  },
});
