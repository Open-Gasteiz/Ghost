const HtmlPlugin = require('html-webpack-plugin');

module.exports = [
    new HtmlPlugin({
        filename: 'index.html', //relative to output.path attr
        template: './index.ejs', //relative to context attr
        inject: true
    })
];
