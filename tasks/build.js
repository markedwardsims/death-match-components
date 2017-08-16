const gulp = require('gulp');
const runSequence = require('run-sequence');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

gulp.task('build', function(done) {
	let tasks = [];
	if (process.env.NODE_ENV === 'production') { tasks.push(['quality']); }
	tasks.push([ 'clean' ]);
	tasks.push([ 'compile' ]);
	tasks.push([ 'distribution' ]);
	tasks.push(done);
	runSequence.apply(null,tasks);
});