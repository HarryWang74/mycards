module.exports = {
    browserSync: {
        options: {
            notify: false,
            background: true,
            watchOptions: {
                ignored: ''
            }
        },
        livereload: {
            options: {
                files: [
                    './{,*/}*.html',
                    '<%= app.css %>/application.css'
                ],
                port: 9000,
                server: {
                    baseDir: ['./'],
                    routes: {
                        '/bower_components': './bower_components'
                    }
                }
            }
        }
    }
};