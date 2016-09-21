const gulp = require('gulp');
const scsslint = require('gulp-scss-lint');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');

gulp.task('lint:scss', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(scsslint({
    	'config': 'scss-lint.yml'
    }));
});

gulp.task('lint:js', function() {
  return gulp.src([
      './js/**/*.js',
      '!./js/**/*.spec.js'
    ])
    .pipe(jshint({
      esversion: 6
    }))
    .pipe(jshint.reporter(stylish));
});
