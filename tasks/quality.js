const gulp = require('gulp');
const scsslint = require('gulp-scss-lint');
const ava = require('gulp-ava');
const eslint = require('gulp-eslint');


// ==== LINTING ====

gulp.task('lint:scss', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(scsslint({
            'config': 'scss-lint.yml'
        }));
});

gulp.task('lint:js', function() {
    return gulp.src(['src/**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// ==== TESTING ====

gulp.task('test', function() {
    return gulp.src('test.js')
        .pipe(ava({
            verbose: true,
            nyc: true
        }));
});


gulp.task('quality', [
    'lint:scss',
    'lint:js',
    'test'
]);