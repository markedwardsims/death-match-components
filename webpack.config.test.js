var webpack = require('webpack');
var path = require('path');
var jsLoader = require('./webpack/loader.js.js');
var extensions = require('./webpack/extensions.js');
var alias = require('./webpack/alias.js');

// setup the loader plugins
var loaderPlugins = [
    ['istanbul', { 'exclude': ['**/*.spec.*'] } ]
];

// add sinon to the alias object 
alias.sinon = 'sinon/pkg/sinon';

// append the istandul plugin for js
// TODO: allow an option to not run coverage for debugging
jsLoader.query.plugins = loaderPlugins;

module.exports = {
    resolve: {
        root: path.resolve(__dirname),
        alias: alias,
        extensions: extensions
    },
    module: {
        loaders: [
            jsLoader
        ],
        noParse: [ 
            /node_modules\/sinon\//
        ]
    },
    devtool: 'cheap-module-source-map'
};