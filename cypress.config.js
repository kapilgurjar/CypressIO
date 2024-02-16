
const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://at.polartechsolutions.com/COREGIS',
//     setupNodeEvents(on, config) {
//       allureWriter(on, config);
//       return config;
//   },
//     "chromeWebSecurity": false,
//     "defaultCommandTimeout": 20000,
//     "execTimeout": 60000,
//     "pageLoadTimeout": 60000,
//     "requestTimeout": 15000,
//     "responseTimeout": 15000,
//     "reporter": "mochawesome",
//     "reporterOptions": {
//       "reportDir": "cypress/reports",
//       "reportFilename": "report",
//       "overwrite": true,
//       "html": true,
//       "json": false,
//       "charts": true,
//       "screenshotOnRunFailure":true

//     },
//    "video": false 
//     }
// });


module.exports = defineConfig({
 // viewportWidth:760,
 // viewportHeight:800,
  "chromeWebSecurity": false,
  "defaultCommandTimeout": 20000,
  "video": false ,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    reportFilename: "report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    ignoreVideos:true
  },
  e2e: {
    baseUrl: 'https://naveenautomationlabs.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      allureWriter(on, config);
      return config;
    },
  },
});

