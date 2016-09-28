var webpack = require('webpack');
var path = require('path');
var jsLoader = require('./webpack/loader.js.js');
var extensions = require('./webpack/extensions.js');

// setup the loader plugins
var loaderPlugins = [
    ['rewire', { 'exclude': ['**/*.spec.*'] } ],
    // ['istanbul', { 'exclude': ['**/*.spec.*'] } ]
];

// append the rewire and istandul plugins for js and jsx
// TODO: allow an option to not run coverage for debugging
jsLoader.query.plugins = loaderPlugins;

module.exports = {
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            sinon: 'sinon/pkg/sinon'
        },
        extensions: extensions
    },
    module: {
        loaders: [
            jsLoader
        ],
        noParse: [ /node_modules\/sinon\// ]
    },
    devtool: 'cheap-module-source-map'
};