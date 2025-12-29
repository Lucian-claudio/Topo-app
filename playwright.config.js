const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30_000,
  use: {
    headless: true,
    baseURL: 'http://localhost:5174',
    viewport: { width: 1280, height: 720 },
  },
});
