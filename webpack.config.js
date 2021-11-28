var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './server.js'),
    },
    target: 'node',
    output: {
        path: path.resolve(__dirname, '.'),
        filename: 'index.prod.js',
    },
    externals: nodeModules
}
