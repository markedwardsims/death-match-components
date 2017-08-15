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

const prependScssFiles = [
    '@import "./src/common/variables";',
    '@import "./src/common/mixins/index";',
    '@import "./src/common/helpers/clearfix";',
    '@import "./src/common/grid/mixins/breakpoints";'
];

gulp.task('scss:components', function() {
    return scss(['./src/components/**/*.scss'], 'dist', {
        prepends: prependScssFiles
    });
});

gulp.task('scss:common', function() {
    return scss(['./src/common/common.scss'], 'dist', {
        name: 'deathmatch.common',
        prepends: prependScssFiles
    });
});

gulp.task('scss:build', [
    'scss:components',
    'scss:common'
]);
