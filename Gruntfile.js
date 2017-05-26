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
            '<%= app.vendor %>@angular/router/angular1/angular_1_router.js',
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

    // 压缩 CSS
    // https://github.com/gruntjs/grunt-contrib-cssmin
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '<%= app.cssFolder %>',
          src: ['*.css', '!*.min.css'],
          dest: '<%= app.cssFolder %>',
          ext: '.css'
        }]
      }
    },

    // 压缩 JS
    // https://github.com/gruntjs/grunt-contrib-uglify
    uglify: {
      options: {
        sourceMap: false,
        beautify:  false,
        mangle:    true,
        compress: { }
      },
      dist: {
        files: [{
          expand: true,
          cwd:    '<%= app.jsFolder %>',
          src:    '{,*/}*.js',
          dest:   '<%= app.jsFolder %>'
        }]
      }
    },

    watch: {
      options: {
        livereload: true
      },
      // app 文件夹下面的 JS 被修改后，运行 concat:applicationJS
      // 重新 merge 所有 app js 到一个文件
      javascripts: {
        files: ['<%= app.appJS %>**/*.js'],
        tasks: ['concat:applicationJS'],
      },
      // app 文件夹下面的 JS 被修改后，运行 concat:applicationJS
      // 重新 merge 所有 app js 到一个文件
      stylesheets: {
        files: '<%= app.scssFoler %>**/*.scss',
        tasks: 'sass:production',
      }
    }
  });



  grunt.registerTask('default', ['watch']);
  grunt.registerTask('serve',   ['watch']);
  grunt.registerTask('build', ['sass:production', 'concat', 'cssmin', 'uglify']);
};