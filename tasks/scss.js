const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const insert = require('gulp-insert');
const es = require('event-stream');
const fs = require('fs');


function scss(files, out, options) {

	options = options || {};
    
    var streams = [];
    var prepends = options.prepends || [];

    function run(file) {

        return gulp.src(file)
            .pipe(insert.transform(function(contents, file) {
                return prepends.join('') + contents;
            }))
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 3 versions']
            }))
            .pipe(gulp.dest(out));
    }

    files.forEach(function(file) {
        streams.push(run(file));
    });

    return es.merge(streams);
}

gulp.task('sass:components', function() {
    scss(['./scss/components/**/*.scss'], 'dist/css/components', {
        prepends: [
            '@import "../variables";',
            '@import "../mixins/index";'
        ]
    });
});

gulp.task('sass:all', function() {
    scss(['./scss/styles.scss'], 'dist/css');
});

gulp.task('sass:watch', function() {
    gulp.watch(scssFiles, ['sass']);
});