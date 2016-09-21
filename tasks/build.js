const gulp = require('gulp');

gulp.task('build', [
	'clean:dist',
	'lint:scss',
	'lint:js',
	// 'test',
	'scss:build:minify',
	'js:build:minify'
]);