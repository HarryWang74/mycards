module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('build', 'Build a dist release', function() {
        var tasks = [
            'jshint',
            'sass',
            'concat',
            'uglify'
        ];

        grunt.task.run(tasks);
    });
};
