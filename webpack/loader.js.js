module.exports = {
    test: /\.js?$/,
    exclude: /(node_modules)/,
    loader: 'babel',
    query: {
        presets: ['es2015'],
        plugins: ['rewire']
    }
};