const controlsHTML = require('../controls/controls');

const headerCSS = require('./header.css');

var data = {
    title: 'Ghost'
};

var headerHTML = `
    <h1>Taller de introducción a Ghost</h1>
    ${controlsHTML}
`;

module.exports = headerHTML;
