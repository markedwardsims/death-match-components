const gulp = require('gulp');
const gutil = require('gulp-util');
const glob = require("globby");
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const insert = require('gulp-insert');
const es = require('event-stream');
const gulpif = require('gulp-if');
const copy = require('gulp-contrib-copy');
const svgMin = require('gulp-svgmin');

// ===== JAVASCRIPT =====

function compileJs(files, out, done) {
    var myConfig = Object.create(webpackConfig);
    myConfig.entry = files;
    myConfig.output = {
        path: out.path || './dist/components',
        filename: out.filename || '[name].js',
        libraryTarget: 'umd'
    };

    if(process.env.NODE_ENV === 'production') {
        myConfig.plugins = [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                sourceMap: true
            })
        ];
    }

    webpack(myConfig, function(err, stats) {
        if (err) throw new gutil.PluginError("js:components", err);
        gutil.log("[js:components]", stats.toString({
            colors: true
        }));
        done();
    });
}

gulp.task('js:build', function(done) {
    glob("./src/components/**/!(*.spec).js").then(function(files) {
        var filesHash = files.map(function(file, index) {
            // extract the name of the component by splitting the path, then trimming off the .js
            var name = file.split('/').splice(-1)[0].slice(0, -3);
            var obj = {};
            // putting the file in an arrary is a wierd workaround: https://github.com/webpack/webpack/issues/300
            obj[name.replace('.js', '') + '/' + name] = [file];
            return obj;
        });
        // flatten the array of objects into a singel object
        var flattenedFilesHash = Object.assign.apply(Object, filesHash);
        compileJs(flattenedFilesHash, {path: './dist/components'}, done);
    });

});

// ===== CSS =====

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
            .pipe(sass({
                outputStyle: 'compressed'
            }).on('error', sass.logError))
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
    return scss(['./src/components/**/*.scss'], 'dist/components', {
        prepends: prependScssFiles
    });
});

gulp.task('scss:common', function() {
    return scss(['./src/common/common.scss'], 'dist/common', {
        name: 'deathmatch.common',
        prepends: prependScssFiles
    });
});


// ====== ICONS ======

const config = {
    plugins: [
        { removeDoctype: true },
        { removeComments: true },
        { removeTitle: true }
    ]
};

gulp.task('icons:build', function() {
    return gulp.src('src/components/icons/*.svg')
        .pipe(svgMin(config))
        .pipe(gulp.dest('dist/components/icons'));
});



gulp.task('compile', [
    'scss:common',
    'scss:components',
    'icons:build',
    'js:build'
]);