const gulp = require('gulp');
const merge = require('merge-stream');

gulp.task('copy:common', function() {
    return merge(
        gulp.src('src/common/*.css').pipe(gulp.dest('dist/common')),
        gulp.src('src/common/_variables.scss').pipe(gulp.dest('dist/common')),
        gulp.src('src/common/grid/**/*').pipe(gulp.dest('dist/common/grid')),
        gulp.src('src/common/helpers/**/*').pipe(gulp.dest('dist/common/helpers')),
        gulp.src('src/common/mixins/**/*').pipe(gulp.dest('dist/common/mixins'))
    );
});

gulp.task('copy:assets', function() {
    gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('distribution', [
    'copy:common',
    'copy:assets'
]);
