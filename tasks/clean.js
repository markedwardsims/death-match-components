const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean:dist', function () {
    return gulp.src('dist')
        .pipe(clean());
});
 
gulp.task('clean:dist:css', function () {
    return gulp.src('dist/css')
        .pipe(clean());
});

gulp.task('clean:dist:js', function () {
    return gulp.src('dist/js')
        .pipe(clean());
});