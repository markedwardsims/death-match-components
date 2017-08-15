const gulp = require('gulp');
const svgMin = require('gulp-svgmin');

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
        .pipe(gulp.dest('dist/icons'));
});