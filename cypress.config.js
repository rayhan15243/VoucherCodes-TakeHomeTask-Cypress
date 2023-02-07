const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1500,
  viewportHeight: 660,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.vouchercodes.co.uk/',
  },
})
