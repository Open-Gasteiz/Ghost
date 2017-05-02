const headerCSS = require('./header.css');

var data = {
    title: 'Ghost'
};

var headerHTML = `<h1>Introducción a ${data.title}</h1>`;

module.exports = headerHTML;
