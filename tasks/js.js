const gulp = require('gulp');

gulp.task('js:components', function() {});
gulp.task('js:all', function() {});

gulp.task('js:build', [
    'js:components',
    'scss:all'
]);

gulp.task('js:build:minify', ['js:build'], function() {});