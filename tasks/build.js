const gulp = require('gulp');

gulp.task('build', [
	'clean:dist',
	'lint:scss',
	'scss:build:minify'
]);