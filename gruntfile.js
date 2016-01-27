module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        nodemon: {
            all: {
                script: 'server.js',
                options: {
                    watchedExtensions: ['js']
                }
            }
        },
        traceur: {
            options: {
                experimental: true
            },
            custom: {
                files: [{
                    expand: true,
                    src: ['Content/js/ES6/*.js'],
                    dest: 'Content/js/ES5/',
                    ext: '.js',
                    flatten: true
                }]
            }
        },
        watch: {
            less: {
                files: 'Content/less/*.less',
                tasks: ['less']
            },
            html: {
                files: 'Views/*.html',
                tasks: ['less']
            },
            js: {
                files: "Content/js/ES6/*.js",
                tasks: ["traceur"]
            }
        },
        less: {
            'Content/css/app.css': ['Content/less/*.less']
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-traceur');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default', ['traceur', 'less','nodemon', 'watch' ]);
};