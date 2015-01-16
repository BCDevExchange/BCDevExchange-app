module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        'copy': {
            main: {
                src: 'deployment_config/GitHub.io.CNAME.txt',
                dest: 'app/CNAME'
            }
        },
        'gh-pages': {
            options: {
                base: 'app',
                repo: 'git@github.com:BCDevX/BCDevX.github.io.git',
                branch: 'master'

            },
            src: ['**']
        },
        modernizr: {

            dist: {
                // [REQUIRED] Path to the build you're using for development.
                "devFile": "remote",

                // Path to save out the built file.
                "outputFile": "app/js/modernizr-custom.js"
            }
        },
        cdnify: {
            options: {
                cdn: require('google-cdn-data')
            },
            dist: {
                html: ['app/*.html']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    // Load gh-pages add-on
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.loadNpmTasks("grunt-modernizr");

    grunt.loadNpmTasks('grunt-google-cdn');

    grunt.registerTask('build', 'modernizr');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'gh-pages']); //'gh-pages'

};