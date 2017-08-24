const gulp = require('gulp');
const styledown = require('styledown');
const glob = require('globby');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const frontMatter = require('front-matter');
const changeCase = require('change-case');

function _makeArray(value) {
    if (!value ) { return []; }
    if (typeof value === 'string') { return [value]; }
    return value;
}

function _buildPagesData(files) {
    return files.map(function(file) {
        const defaultName = changeCase.paramCase( file.split('/').pop().split('.')[0] );
        const markdown = fs.readFileSync(file, 'utf8');
        const fm = frontMatter(markdown);
        return {
            name: changeCase.titleCase(fm.attributes.name || defaultName),
            css: _makeArray(fm.attributes.css),
            js: _makeArray(fm.attributes.js),
            content: styledown.parse(fm.body),
            route: changeCase.paramCase(fm.attributes.name || defaultName)
        };
    })
}

function _buildNavigationData(data) {
    return data.map(function(page){
        page.navigationData = data.map(function(page){
            return  {
                name: page.name,
                href: '/' + page.route
            };
        });
        return page;
    });
}

function _renderPage(context){
    ejs.renderFile('./documentation/templates/_layout.ejs', context, {}, function(err, str) {
        // currently using the route to create a directory to store the page
        const directoryName = context.route;
        const newDir = path.resolve('docs', directoryName);
        if (!fs.existsSync(newDir)) { fs.mkdirSync(newDir); }

        // use index.html for cleaner URLs
        fs.writeFileSync(newDir + '/index.html', str);
    });
}

function _renderAllPages(pages){
    if (!fs.existsSync('docs')) { fs.mkdirSync('docs'); }
    pages.forEach(_renderPage);
}


gulp.task('documentation', function(done) {
    return glob("./src/**/*.md")
        .then(_buildPagesData)
        .then(_buildNavigationData)
        .then(_renderAllPages);
});
