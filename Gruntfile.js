module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
          'stylesheets/css/application.css':'stylesheets/scss/application.scss'
        }
      }
    },

    // https://github.com/gruntjs/grunt-contrib-concat
    // 合并多个文件
    concat: {
      // 合并选项
      options: {
          stripBanners: false,
          banner: '', //'/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          //'<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      // 合并第三方 JS library
      vendorJS: {
        dest: 'javascripts/vendor.js',
        src: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/tether/dist/js/tether.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular/angular_1_router.js',
          ]
      },
      // 合并 App JS
      applicationJS: {
        dest: 'javascripts/application.js',
        src: [
          'app/**/*.js'
        ]
      },
      // 合并 App SASS
      applicationSCSS: {
        dest: 'stylesheets/scss/application.scss',
        src: [
          'app/**/*.scss'
        ]
      },

      // 合并第三方 CSS
      vendorCSS: {
        dest: 'stylesheets/css/vendor.css',
        src: [
          'node_modules/bootstrap/dist/css/bootstrap.css',
        ]
      },
    },

    // 压缩 CSS
    // https://github.com/gruntjs/grunt-contrib-cssmin
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'stylesheets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'stylesheets/css',
          ext: '.css',
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
          cwd:    'javascripts/',
          src:    '{,*/}*.js',
          dest:   'javascripts/'
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
        files: ['app/**/*.js'],
        tasks: ['concat:applicationJS'],
      },
      // app 文件夹下面的 JS 被修改后，运行 concat:applicationJS
      // 重新 merge 所有 app js 到一个文件
      stylesheets: {
        files: 'app/**/*.scss',
        tasks: ['concat:applicationSCSS', 'sass:production'],
      }
    }
  });



  grunt.registerTask('default', ['watch']);
  grunt.registerTask('serve',   ['watch']);
  // grunt.registerTask('build', ['sass:production', 'concat', 'cssmin', 'uglify']);
  grunt.registerTask('build', ['sass', 'concat', 'cssmin']);
};