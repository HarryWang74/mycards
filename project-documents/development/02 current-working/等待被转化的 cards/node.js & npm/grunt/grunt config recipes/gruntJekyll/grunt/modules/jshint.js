module.exports = {
    jshint: {
        options: {
            reporter: require('jshint-stylish'),
            ignores: [
                // 'app/assets/javascripts/legacy/{,*/}*.js',
            ]
        },

        dist: {
            src: [
               '<%= app.applicationJS %>'
            ]
        }
    }
};
