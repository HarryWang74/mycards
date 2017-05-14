module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    app: {
      javascript:        'app/assets/javascripts/',
      stylesheet:        'app/assets/stylesheets/',
      vendor:            'app/assets/vendor/',
      public_javascript: 'public/javascripts/',
      public_stylesheet: 'public/stylesheets/',
      tmp:               '.tmp/'
    },

    sass: {
      production: {
        options: {
          compass:     true,
          lineNumbers: false,
          style:       'compressed',
          precision:    10 // https://github.com/twbs/bootstrap-sass/issues/409
        },

        files: {
          '<%= app.public_stylesheet %>application.css' : '<%= app.stylesheet %>application.scss'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: true,
        force:    true,
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: 'Gruntfile'
      },
      javascript: {
        src: ['<%= app.javascript %>**/*.js']
      }
    },

    concat: {
      options: {
        separator: ';',
        stripBanners: {
          block : true,
          line  : true
        }
      },

      dist: {
        files: {
          '<%= app.tmp %>application.js': [
            // TODO: Move all vendor js to Bower dependencies
            // jQuery
            '<%= app.vendor %>owlcarousel/owl-carousel/owl.carousel.min.js',
            '<%= app.vendor %>jquery.lazyload/jquery.lazyload.min.js',

            // Angular
            '<%= app.vendor %>angular/angular.min.js',

            // Bootstrap
            '<%= app.vendor %>bootstrap/dist/js/bootstrap.min.js',

            // Lodash
            '<%= app.vendor %>lodash/dist/lodash.min.js',

            // Greensock
            '<%= app.vendor %>greensock/src/minified/plugins/CSSPlugin.min.js',
            '<%= app.vendor %>greensock/src/minified/easing/EasePack.min.js',
            '<%= app.vendor %>greensock/src/minified/TweenLite.min.js',

            // App JS
            '<%= app.javascript %>angular/**/*.js',
            '<%= app.javascript %>application.js'
          ]
        }
      }
    },

    uglify: {
      options: {
        compress: true
      },
      my_target: {
        files: {
          '<%= app.public_javascript %>modernizr.js':       '<%= app.vendor %>modernizr/modernizr.js',
          '<%= app.public_javascript %>application.min.js': '<%= app.tmp %>application.js'
        }
      }
    },

    copy: {
      ie8: {
        expand:  true,
        flatten: true,
        src:     '<%= app.vendor %>ie8/build/ie8.js',
        dest:    '<%= app.public_javascript %>',
        filter:  'isFile'
      },
      respond: {
        expand:  true,
        flatten: true,
        src:     '<%= app.vendor %>respond/dest/respond.min.js',
        dest:    '<%= app.public_javascript %>',
        filter:  'isFile'
      }
    },

    watch: {
      options: {
        livereload: true
      },


      jshint: {
        files: ['<%= app.javascript %>**/*.js', 'Gruntfile.js'],
        tasks: ['jshint']
      },

      javascripts: {
        files: ['<%= app.javascript %>**/*.js'],
        tasks: ['concat', 'uglify']
      },

      stylesheets: {
        files: '<%= app.stylesheet %>**/*.scss',
        tasks: 'sass:production'
      }

    },

    shell: {
      serve: {
        command: 'bundle exec wagon serve > /dev/null 2>&1 &'
      }
    }
  });


  grunt.registerTask('default', ['watch']);
  grunt.registerTask('serve',   ['shell:serve', 'watch']);
  grunt.registerTask('deploy', ['concat', 'uglify', 'copy', 'sass:production']);
  grunt.registerTask('lint', ['jshint']);
};
