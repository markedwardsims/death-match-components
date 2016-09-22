const gulp = require('gulp');
const gutil = require('gulp-util');
const glob = require("glob");
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

function compileJs(files, out, done) {
    var myConfig = Object.create(webpackConfig);
    myConfig.entry = files;
    myConfig.output = {
        path: out.path || './dist/js',
        filename: out.filename || '[name].js',
        libraryTarget: 'umd'
    };
    webpack(myConfig, function(err, stats) {
        if (err) throw new gutil.PluginError("js:components", err);
        gutil.log("[js:components]", stats.toString({
            colors: true
        }));
        done();
    });
}

gulp.task('js:components', function(done) {
    glob("./js/components/**/!(*.spec).js", {}, function(er, files) {
        var filesHash = files.map(function(file, index) {
            // extract the name of the component by splitting the path, then trimming off the .js
            var name = file.split('/').splice(-1)[0].slice(0, -3);
            var obj = {};
            // putting the file in an arrary is a wierd workaround: https://github.com/webpack/webpack/issues/300
            obj[name] = [file];
            return obj;
        });
        // flatten the array of objects into a singel object
        var flattenedFilesHash = Object.assign.apply(Object, filesHash);
        compileJs(flattenedFilesHash, {path: './dist/js/components'}, done);
    });
});

gulp.task('js:all', function(done) {
    glob("./js/**/!(*.spec).js", {}, function(er, files) {
        compileJs(files, {filename: 'deathmath.js'}, done);
    });
});

gulp.task('js:build', [
    'js:components',
    'js:all'
]);

gulp.task('js:build:minify', ['js:build'], function() {
  return gulp.src('dist/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/js'));
});