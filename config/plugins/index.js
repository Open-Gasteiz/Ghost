//PREPARE CONFIG ATTRIBUTES BY ENV.
var isProd = process.env.NODE_ENV === 'production'; //true or false
var isDev = process.env.NODE_ENV === 'development'; //true or false

var pluginsCommons = require('./pluginsCommons');
console.log(pluginsCommons);
var pluginsDev = require('./pluginsDev');
var pluginsProd = require('./pluginsProd');

module.exports = pluginsCommons.concat(isProd ? pluginsProd : pluginsDev);
