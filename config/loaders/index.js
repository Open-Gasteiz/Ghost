//PREPARE CONFIG ATTRIBUTES BY ENV.
var isProd = process.env.NODE_ENV === 'production'; //true or false
var isDev = process.env.NODE_ENV === 'development'; //true or false

var loadersCommons = require('./loadersCommons');
console.log(loadersCommons);
var loadersDev = require('./loadersDev');
var loadersProd = require('./loadersProd');

module.exports = loadersCommons.concat(isProd ? loadersProd : loadersDev);
