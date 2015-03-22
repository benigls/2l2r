module.exports = function(grunt){
	grunt.initConfig({
		uglify: {
            js: {
                files: {
                    'public/build/js/script.js': 'public/dev/js/*.js'
                }
            }
        },
        copy: {
            files: {
                expand: true,
                cwd: 'public/dev/',
                src: 'img/*', 
                dest: 'public/build/'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public/build/css/styles.css': 'public/dev/sass/*.scss',
                }
            }
        },
        jshint: {
            frontendJS: {
                files: 'public/build/js/script.js'
            },
            backendJS: {
                files: {
                    src: [
                        'app.js',
                        'submodules/**',
                        'routes/**'
                    ]
                }
            },
            gruntFile: {
                files: 'Gruntfile.js'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            gruntFile: {
                files: 'Gruntfile.js',
                tasks: 'jshint:gruntFile',
            },
            frontendJS: {
                files: 'public/dev/js/*.js',
                tasks: ['uglify', 'jshint:frontendJS']
            },
            backendJS: {
                files: [
                    'app.js',
                    'submodules/**',
                    'routes/**'
                ],
                tasks: 'jshint:backendJS'
            },
            sass: {
                files: 'public/dev/sass/*.scss',
                tasks: 'sass'
            },
            ejs: {
                files: 'views/**'
            }
        }
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
    grunt.registerTask('build', [
        'uglify',
        'copy',
        'sass',
        'jshint'
    ]);
    grunt.registerTask('default', [
        'build',
        'watch'
    ]);
};

	