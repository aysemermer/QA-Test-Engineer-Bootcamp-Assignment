const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "5hgyat",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
