const gulp = require('gulp');
const copy = require('gulp-contrib-copy');

gulp.task('copy:common', function() {
    gulp.src('src/common/**/*')
        .pipe(copy())
        .pipe(gulp.dest('dist/common'));
});

gulp.task('distribution', [
    'copy:common'
]);
