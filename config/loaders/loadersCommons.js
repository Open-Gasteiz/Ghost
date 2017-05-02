//PREPARE CONFIG ATTRIBUTES BY ENV.
var isProd = process.env.NODE_ENV === 'production'; //true or false
var isDev = process.env.NODE_ENV === 'development'; //true or false
console.log('dev:', isDev);
console.log('prod:', isProd);
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//LOADERS prepare
//css
var cssDev = ['style-loader', 'css-loader'];
var cssProd =  ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader'],
    //publicPath: 'assets/css/'
});
var cssConfig = isProd ? cssProd : cssDev;
var cssLoader = {
    test: /\.css$/,
    use: cssConfig
};
console.log(__dirname);
//transpiler JS with babel-loader
var includePaths = [
    path.join(__dirname, '../', '../', 'src'),
    path.join(__dirname, '../', '../', 'src', 'components', 'aside'),
    path.join(__dirname, '../', '../', 'src', 'components', 'header'),
    path.join(__dirname, '../', '../', 'src', 'components', 'main'),
    path.join(__dirname, '../', '../', 'src', 'components', 'footer')
];
var babelLoader = {
    test: /\.js$/, //si la expresión regular devuelve true, por lo que lo va a usar este cargador .
    use: 'babel-loader',
    include: includePaths
    //exclude: /node_modules/ //desde la raiz del proyecto excluira lo que indique esta exReg.
};

//require images with file-loader
var imagesLoader = {
    test: /\.(png|jpg|gif)$/,
    use: ['file-loader?name=[hash].[ext]&outputPath=assets/img/'] //TOKNOW: no substituye el outputPath ? parece que es relativo a el.
};

module.exports = [ cssLoader, babelLoader, imagesLoader ];
