//This is a utility file that generates the header
var handlebars = require('handlebars');
var fs = require('fs');

const inFile = 'header.hbs';
const json = require('./pages.json');

const source = fs.readFileSync(inFile, 'utf8');
const template = handlebars.compile(source, { strict: true });
module.exports = {
    headerMake: function() {
        const result = template(json);
        return result;
    }
}


