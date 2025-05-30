import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configuration des listeners si besoin
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4200',
    video: false,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
