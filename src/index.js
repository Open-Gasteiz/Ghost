/*index entry point*/
const indexCSS = require('./index.css');

var headerTemplate = require('components/header/header.js');
var mainTemplate = require('components/main/main.js');
var asideTemplate = require('components/aside/aside.js');
var footerTemplate = require('components/footer/footer.js');

var header = document.getElementById('header');
header.innerHTML = headerTemplate;
var main = document.getElementById('main');
main.innerHTML = mainTemplate;
var aside = document.getElementById('aside');
aside.innerHTML = asideTemplate;
var footer = document.getElementById('footer');
footer.innerHTML = footerTemplate;
