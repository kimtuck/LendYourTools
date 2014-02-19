// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: [
      'support/*.js',
      'PageObjects/*.js',
      'specs/*_spec.js'
  ],

    onPrepare: function() {
        // The require statement must be down here, since jasmine-reporters
        // needs jasmine to be in the global and protractor does not guarantee
        // this until inside the onPrepare function.
        require('jasmine-reporters');
        jasmine.getEnv().addReporter(
            //new jasmine.JUnitXmlReporter('xmloutput', true, true));
            new jasmine.ConsoleReporter())
    },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  baseUrl: 'https://catdev.3m.com'
};
