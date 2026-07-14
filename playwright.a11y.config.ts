import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/a11y',
  timeout: 60000,
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
  },
})
