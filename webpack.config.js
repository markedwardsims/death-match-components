var webpack = require('webpack');
var path = require('path');
var jsLoader = require('./webpack/loader.js.js');
var extensions = require('./webpack/extensions.js');
var alias = require('./webpack/alias.js');

module.exports = {
    entry: ['babel-polyfill'],
    resolve: {
        root: path.resolve(__dirname),
        extensions: extensions,
        alias: alias
    },
    module: {
        loaders: [
            jsLoader
        ]
    },
    devtool: 'cheap-module-source-map'
};