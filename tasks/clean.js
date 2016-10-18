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

gulp.task('clean:dist:icons', function () {
    return gulp.src('dist/icons')
        .pipe(clean());
});

gulp.task('clean:coverage', function () {
    return gulp.src('coverage')
        .pipe(clean());
});