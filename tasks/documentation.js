const gulp = require('gulp');
const Documarker = require('documarker');

const documarker = new Documarker({
    targetPattern: 'src/**/*.md',
    indexPageTargetPattern: 'docsIndex.md'
});

gulp.task('documentation:copy:dist', function() {
    gulp.src('dist/**/*')
        .pipe(gulp.dest('docs/dist'));
});

gulp.task('documentation:build', function() {
    return documarker.build();
});

gulp.task('documentation', [ 'documentation:copy:dist', 'documentation:build' ]);
