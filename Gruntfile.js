module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // not / for root level folders
    app: {
      appJS: 'app',
      jsFolder: 'javascripts/',
      cssFolder: 'stylesheets/css/',
      vendor: 'node_modules/',
      scssFoler: 'stylesheets/scss/',
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

    // https://github.com/gruntjs/grunt-contrib-concat
    // 合并多个文件
    concat: {
      // 合并选项
      options: {
        separator: ';',
        stripBanners: {
          block : true,
          line  : true
        }
      },
      // 合并第三方 JS library
      vendorJS: {
        dest: '<%= app.jsFolder %>vendor.js',
        src: [
            '<%= app.vendor %>bootstrap/dist/js/bootstrap.min.js',
            '<%= app.vendor %>angular/angular.min.js',
          ]
      },
      // 合并 App JS
      applicationJS: {
        dest: '<%= app.jsFolder %>application.js',
        src: [
          '<%= app.appJS %>**/*.js'
        ]
      },
      // 合并第三方 CSS
      vendorCSS: {
        dest: '<%= app.cssFolder %>vendor.css',
        src: [
          '<%= app.vendor %>bootstrap/dist/css/bootstrap.css',
        ]
      },
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
  grunt.registerTask('build', ['concat', 'sass:production']);
};