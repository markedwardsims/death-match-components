const gulp = require('gulp');
const scsslint = require('gulp-scss-lint');
// const jshint = require('gulp-jshint');
 
gulp.task('lint:scss', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(scsslint({
    	'config': 'scss-lint.yml'
    }));
});

// gulp.task('lint:js', function() {
//   return gulp.src([
//       './app/**/*.js',
//       '!./app/**/*.spec.js'
//     ])
//     .pipe(jshint({
//       esversion: 6
//       // TODO: add the exclusion for regular/default params
//     }))
//     .pipe(jshint.reporter('default'));
// });