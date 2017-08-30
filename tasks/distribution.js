const gulp = require('gulp');
const copy = require('gulp-contrib-copy');

gulp.task('copy:common', function() {
    gulp.src('src/common/**/*.css')
        .pipe(copy())
        .pipe(gulp.dest('dist/common'));
});

gulp.task('copy:assets', function() {
    gulp.src('src/assets/**/*')
        .pipe(copy())
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('distribution', [
    'copy:common',
    'copy:assets'
]);
