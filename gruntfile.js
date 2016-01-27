module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "localhost",
                    bases: ["Views", "Content"]
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
        },
        open: {
            all: {
                path: "http://localhost:9000/index.html"
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost'
            },
            rules: {
                '^/js/(.*)$': '/Content/js/$1',
                '^/css/(.*)$': '/Content/css/$1',
                '^/vendor/(.*)$': '/Content/vendor/$1',
            }
        },
    });

    grunt.loadNpmTasks('grunt-connect-route');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-traceur');
    grunt.loadNpmTasks("grunt-open");
    grunt.loadNpmTasks("grunt-express");
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['traceur', 'less', 'express', 'open', 'watch']);
};