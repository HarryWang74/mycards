module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // not / for root level folders
    app: {
      javascript:        '_javascripts/',
      cssFolder:        'stylesheets/css/',
      vendor:            '_vendors/',
      public_javascript: '_site/javascripts/',
      scssFoler: 'stylesheets/scss/'
    },

    // compile scss to css
    // https://github.com/gruntjs/grunt-contrib-sass
    sass: {
      production: {
        options: {
          compass:     true,
          lineNumbers: false,
          style:       'compressed',
          debugInfo: true,
          precision:    10 // https://github.com/twbs/bootstrap-sass/issues/409
        },

        files: {
          '<%= app.cssFolder %>application.css' : '<%= app.scssFoler %>application.scss'
        }
      }
    },


    watch: {
      options: {
        livereload: true
      },
      // javascripts: {
      //  files: ['<%= app.javascript %>**/*.js'],
      //  tasks: ['concat', 'uglify']
      // },
      stylesheets: {
        files: '<%= app.scssFoler %>**/*.scss',
        tasks: 'sass:production'
      }
    }
  });


  grunt.registerTask('default', ['watch']);
  grunt.registerTask('serve',   ['watch']);
};