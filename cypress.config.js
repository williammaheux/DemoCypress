const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://only-testing-blog.blogspot.com/2014/01/textbox.html?',
    defaultCommandTimeout : 16000,
  },
});
