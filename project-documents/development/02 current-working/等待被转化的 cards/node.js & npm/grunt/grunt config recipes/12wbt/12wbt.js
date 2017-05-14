module.exports = function(grunt) {
 'use strict';

  var shelljs = require('shelljs'),
      pkg     = require('./package.json'),
      bower   = require('./bower.json'),
      config = {
        yeoman: {
          env:   grunt.option('env') || 'development',
          pkg:   pkg,
          app:   'app/assets',
          dist:  'dist',
          build: 'public',
          bower: 'bower_components'
        }
      };

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take
  require('time-grunt')(grunt);

  // Init the config with the tasks
  grunt.initConfig(config);

  // Merge in modules
  grunt.file.recurse('./config/grunt/modules', function(abspath, rootdir, subdir, filename) {
    if ((/\.js$/).test(filename)) {
      var task = require('./' + abspath);

      if (typeof task === 'function') {
        task = task(grunt);
      }

      grunt.config.merge(task);
    }
  });

  // Merge overrides
  if (grunt.file.isFile('./config/grunt/overrides.js')) {
    grunt.config.merge(require('./config/grunt/overrides.js'));
  }

  // Load app tasks
  grunt.task.loadTasks('./config/grunt/tasks');

  // Default task
  grunt.registerTask('default', ['serve']);
};
