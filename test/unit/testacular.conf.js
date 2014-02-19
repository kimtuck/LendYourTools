module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],

        basePath: "../..",
        port: 9876,
        runnerPort: 9100,
        singleRun: false,
        autoWatch: true,
        captureTimeout: 60000,

        colors: true,
        logLevel: config.LOG_DEBUG,
        loggers: [{type: 'console'}],
        reporters: ['progress'],
        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],
        preprocessors: { '**/*.html' :'html2js'},

        files: [
                "vendor/lodash/lodash.js",
                "vendor/jquery/jquery.min.js",
                "vendor/jquery-scrollTo/jquery.scrollTo.js",
                "vendor/jquery-ui-1.10.2.custom/js/jquery-ui-1.10.2.custom.js",
                "vendor/jQuery-ui-touchpunch/jquery.ui.touch-punch.min.js",
                "vendor/bootstrap/bootstrap.js",
                "vendor/bootstrap-datepicker/js/bootstrap-datepicker.js",
                "js/locales/bootstrap-datepicker.en.js",
                "js/locales/bootstrap-datepicker.en-CA.js",
                "vendor/bootstrap-datepicker/js/locales/bootstrap-datepicker.fr.js",
                "vendor/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js",

                "vendor/globalize/lib/globalize.js",
                "vendor/globalize/lib/cultures/globalize.cultures.js",


                "vendor/tinycolor/tinycolor.min.js",
                "vendor/select2-3.3.2/select2.js",
                "vendor/json2/json2.js",
                "vendor/tinymce/js/tinymce/tinymce.min.js",

                "vendor/Angular-1.2.0/angular.js",
                "vendor/Angular-1.2.0/angular-route.js",
                "vendor/Angular-1.2.0/angular-resource.js",
                "vendor/Angular-1.2.0/angular-sanitize.js",
                "vendor/angular-strap/dist/angular-strap.js",
                "vendor/AngularJS-Toaster/toaster.js" ,

                "vendor/angular-ui-0.4.0/angular-ui.js",
                "vendor/angular-ui-0.4.0/build/angular-ui-ieshiv.min.js",
                "vendor/angular-ui-0.4.0/angular-ui-modal.js",
                "vendor/ngUpload/ng-upload.js",

                "vendor/jscache/cache.js",
                "dev/test/Vendor/TimeCop/timecop.js",
                "vendor/Angular-1.2.0/angular-mocks.js",


            'js/objects/SortTableHelper.js',

        'js/resolvers.js',
        'js/config.js',
        'js/config.dev.js',

        'js/app.js',

        'js/filters/*.js',
        'js/services/*.js',
        'js/services/**/*.js',
        'js/objects/*.js',
        'js/controllers/**/*.js',
        'js/directives/*.js',
        'js/directives/directives.js',
        'js/data.js',
        'js/app-mocks.js',
        'dev/test/unit/**/*.js',
        'html/directives/*.html'
    ],

    exclude: ['**/*.html.js.js*  ' ]
    }
)}
