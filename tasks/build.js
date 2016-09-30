const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', function(done) {
	runSequence(
		'test',
		'clean:coverage',
		'clean:dist',
		[
			'lint:scss',
			'lint:js'
		],
		[
			'scss:build:minify',
			'js:build:minify'
		],
		done
	);
});