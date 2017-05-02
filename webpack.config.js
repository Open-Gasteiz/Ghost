var path = require('path');
var webpack = require('webpack');
//const extractCSS = new ExtractTextPlugin('assets/css/[name].css');
var plugins = require('./config/plugins');
var loaders = require('./config/loaders');

module.exports = {
    //EL CONTEXTO ES UNA RUTA COMUN/RAIZ A ENTRY
    context: path.join(__dirname, 'src'),
    //ENTRY ES LA HUBICACIÓN DE LOS ACHIVOS PARA SU LECTURA Y ENTRADA A WEBPACK PARA SER CONSTRUIDOS.
    //es relativo al 'context'.
    entry: './index.js',

    //OUTPUT ES LA SALIDA DE WEBPACK (DESPUES DE LA CONSTRUCCIÓN) DE LOS ARCHIVOS AL SISTEMA DE ARCHIVOS.
    output: {
        path: path.join(__dirname, 'dist'), //ha de ser absoluta.
        //PUBLICPATH ES LA RAIZ DE LA URI DE ENVIO AL CLIENTE (PUBLICACION).
        //Podemos tener una estructura diferente en el sistema de archivos que la que enviamos al cliente.
        //esto hará que enviemos a http://localhost:8080/dist/....
        //publicPath: '/', //este es para el JS y el resto si no lo sobreescriben.
        filename: 'index.bundle.js'
    },
    module:{
        rules: loaders
    },
    plugins: plugins
};
