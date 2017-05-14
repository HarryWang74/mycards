module.exports = {
	uglify: {
		options: {
			sourceMap: false,
			beautify:  false,
			mangle:    true
		},

		dist: {
			files: [{
				expand: true,
				cwd: '<%= app.js%>',
				src:    '{,*/}*.js',
				dest: '<%= app.js %>'
			}]
		}
	}
};
