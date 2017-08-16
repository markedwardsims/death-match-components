const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean:dist', function () {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('clean:coverage', function () {
    return gulp.src('coverage')
        .pipe(clean());
});


gulp.task('clean', [
    'clean:dist',
    'clean:coverage'
]);