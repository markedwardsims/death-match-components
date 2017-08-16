var webpack = require('webpack');
var path = require('path');
var jsLoader = require('./webpack/loader.js.js');
var extensions = require('./webpack/extensions.js');
var alias = require('./webpack/alias.js');

// add sinon to the alias object
alias.sinon = 'sinon/pkg/sinon';

// TODO: bring back code coverage!

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