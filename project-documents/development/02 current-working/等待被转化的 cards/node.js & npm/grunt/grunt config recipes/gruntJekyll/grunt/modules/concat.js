module.exports = {
	concat: {
		options: {
			separator: ';'
		},

		vendorCSS: {
			dest: '<%= app.css %>/vendors.css',
			src: [
				'<%= app.vendors %>/bootstrap/dist/css/bootstrap.min.css',
				'<%= app.vendors %>/bootstrap/dist/css/bootstrap-theme.min.css'
			]
		},

		vendorJS: {
			dest: '<%= app.js %>/vendors.js',
			src: [
				'<%= app.vendors %>/jquery/dist/jquery.js',
				'<%= app.vendors %>/bootstrap/dist/js/bootstrap.js',
				'<%= app.vendors %>/angular/angular.js',
				'<%= app.vendors %>/angular-route/angular-route.js',
			]
		},

		applicationJS: {
			dest: '<%= app.js %>/application.js',
			src: [
				'<%= app.applicationJS %>'
			]
		}
	}
};
