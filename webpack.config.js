var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './test-main.js'],
    output: {
        path: './tmp',
        filename: '[name].built.js'
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: {},
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['rewire']
                }
            }
        ]
    },
    devtool: 'cheap-module-source-map'
};