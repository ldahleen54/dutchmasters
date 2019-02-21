//This is a utility file that generates the header
var handlebars = require('handlebars');
var fs = require('fs');
var http = require('http');

const inFile = 'header.hbs';
const outFile = 'header.html';

const json = require('./pages.json');

const source = fs.readFileSync(inFile, 'utf8');
module.exports = {
    headerMake: function() {
        return "test";
    }
}


