module.exports = function(config) {
    config.set({
  
      frameworks: ["ui5"],
  
      ui5: {
        url: "https://sapui5.hana.ondemand.com"
      },

      reporters: ['progress', 'junit', 'coverage'],

      preprocessors: {
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        // results will be be stored in coverage
        'webapp/*.js': ['coverage'],
        // sub folders test and localService will be ignored
        'webapp/!(test|localService)/**/*.js': ['coverage']
      },
      // optionally, configure the reporter
      coverageReporter: {
        type : 'cobertura',
        dir : 'coverage/',
        file: 'cobertura.xml'
      },
   
      browsers: ["ChromeHeadless"],

      singleRun: true
      
    });
};