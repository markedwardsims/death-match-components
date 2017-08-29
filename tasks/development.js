const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');

gulp.task('serve', ['build', 'documentation'], function() {
    browserSync.init({
        port: 3333,
        server: {
            baseDir: ['docs'],
        }
    });

    gulp.watch("src/**/*.scss").on('change', function(){
        runSequence(
            [
                'scss:components',
                'scss:common'
            ],
            [
                'documentation:copy:dist'
            ],
            browserSync.reload
        );
    });

    gulp.watch("src/**/*.js").on('change', function(){
        runSequence(
            [
                'js:build'
            ],
            [
                'documentation:copy:dist'
            ],
            browserSync.reload
        );
    });

    gulp.watch("src/**/*.md").on('change', function(){
        runSequence(
            [
                'documentation'
            ],
            browserSync.reload
        );
    });

});