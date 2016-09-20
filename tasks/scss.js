const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const insert = require('gulp-insert');
const es = require('event-stream');
const rename = require('gulp-rename');
const gulpif = require('gulp-if');
const cleanCSS = require('gulp-clean-css');
const copy = require('gulp-contrib-copy');

function scss(files, out, options) {

    options = options || {};

    var streams = [];
    var prepends = options.prepends || [];

    var prepend = true;

    function run(file) {
        return gulp.src(file)
            .pipe(insert.transform(function(contents, file) {
                return prepends.join('') + contents;
            }))
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 3 versions']
            }))
            .pipe(gulpif(function(file) {
                return (options.name);
            }, rename(options.name + '.css')))
            .pipe(gulp.dest(out));
    }

    files.forEach(function(file) {
        streams.push(run(file));
    });

    return es.merge(streams);
}

gulp.task('scss:components', function() {
    return scss(['./scss/components/**/*.scss'], 'dist/css/components', {
        prepends: [
            '@import "../variables";',
            '@import "../config/index";',
            '@import "../helpers/index";',
            '@import "../mixins/index";'
        ]
    });
});

gulp.task('scss:common', function() {
    return scss(['./scss/common/index.scss'], 'dist/css', {
        name: 'common',
        prepends: [
            '@import "../variables";',
            '@import "../config/index";',
            '@import "../helpers/index";',
            '@import "../mixins/index";'
        ]
    });
});

gulp.task('scss:all', function() {
    return scss(['./scss/deathmatch.scss'], 'dist/css');
});

gulp.task('scss:build', [
    'scss:components',
    'scss:common',
    'scss:all'
]);

gulp.task('scss:build:minify', ['scss:build'], function() {
    return gulp.src('dist/**/*.css')
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});