const gulp = require('gulp');
const clean = require('gulp-clean');
 
gulp.task('clean:css', function () {
    return gulp.src('dist/css')
        .pipe(clean());
});