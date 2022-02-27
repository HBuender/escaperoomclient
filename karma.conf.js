// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const isDocker = require('is-docker')();
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter')
    ],
    browsers: ['ChromeHeadless', 'CircleCI_ChromeHeadless'],
    customLaunchers: {
      CircleCI_ChromeHeadless: {
        base: 'ChromeHeadless',
        flags: [
          '--headless',
          '--disable-gpu',
          '--disable-translate',
          '--disable-extensions',
          '--no-sandbox',  // Added to fix an issue where of Failed to connect to chrome browser
          '--remote-debugging-port=9222',
        ],
      }
    },
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    // the default configuration
    junitReporter: {
      outputDir: 'test-results/karma', // results will be saved as $outputDir/$browserName.xml
      outputFile: 'test-result', // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      properties: {}, // key value pair of properties to add to the <properties> section of the report
      xmlVersion: '1' // use '1' if reporting to be per SonarQube 6.2 XML format
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/escaperoomclient'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml','junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    restartOnFileChange: true
  });
};
