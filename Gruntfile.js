module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-angular-gettext');
	grunt.loadNpmTasks('grunt-html-build');
	grunt.initConfig({
		nggettext_extract: {
			pot: {
				files: {
					'po/template.pot': ['**/*.html']
				}
			}
		},
		nggettext_compile: {
			all: {
				files: {
					'translations.js':['po/*.po']
				}
			}
		},
		fixturesPath: "fixtures",

		    htmlbuild: {
		        dist: {
		            src: 'index.html',
		            dest: 'samples/',
		            options: {
		                beautify: true,
		                prefix: '//some-cdn',
		                relative: true,
		                scripts: {
		                    bundle: [
		                        '<%= fixturesPath %>/scripts/*.js',
		                        '!**/main.js',
		                    ],
		                    main: '<%= fixturesPath %>/scripts/main.js'
		                },
		                styles: {
		                    bundle: [
		                        '<%= fixturesPath %>/css/libs.css',
		                        '<%= fixturesPath %>/css/dev.css'
		                    ],
		                    test: '<%= fixturesPath %>/css/inline.css'
		                },
		                sections: {
		                    views: '<%= fixturesPath %>/views/**/*.html',
		                    templates: '<%= fixturesPath %>/templates/**/*.html',
		                    layout: {
		                        header: '<%= fixturesPath %>/layout/header.html',
		                        footer: '<%= fixturesPath %>/layout/footer.html'
		                    }
		                },
		                data: {
		                    // Data to pass to templates
		                    version: "0.1.0",
		                    title: "test",
		                },
		            }
		        }
	    	}
	});
}