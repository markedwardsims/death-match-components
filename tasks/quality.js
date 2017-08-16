const gulp = require('gulp');
const scsslint = require('gulp-scss-lint');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const Server = require('karma').Server;
const path = require('path');

// ==== LINTING ====

gulp.task('lint:scss', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(scsslint({
            'config': 'scss-lint.yml'
        }));
});

gulp.task('lint:js', function() {
    return gulp.src([
        './js/**/*.js',
        '!./js/**/*.spec.js'
    ])
        .pipe(jshint({
            esversion: 6
        }))
        .pipe(jshint.reporter(stylish));
});

// ==== TESTING ====

gulp.task('test', function(done) {
    new Server({
        configFile: path.resolve(__dirname, '../') + '/karma.conf.js',
        singleRun: true
    }, done).start();
});



gulp.task('quality', [
    'lint:scss',
    'lint:js',
    'test'
]);