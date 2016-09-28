var webpack = require('webpack');
var path = require('path');
var jsLoader = require('./webpack/loader.js.js');
var extensions = require('./webpack/extensions.js');

module.exports = {
    entry: ['babel-polyfill'],
    resolve: {
        root: path.resolve(__dirname),
        extensions: extensions
    },
    module: {
        loaders: [
            jsLoader
        ]
    },
    devtool: 'cheap-module-source-map'
};