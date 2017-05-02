const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    new ExtractTextPlugin({
        filename: 'assets/css/style.css', //relative to output.path attr
        allChunks: true
    })
];
