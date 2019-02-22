//This is a component file that generates the champions page body
var handlebars = require('handlebars');
var fs = require('fs');

const inFile = 'champions.hbs';
const json = require('./pages.json');

const source = fs.readFileSync(inFile, 'utf8');
const template = handlebars.compile(source, { strict: true });
module.exports = {
    makeChampions: function() {
        const result = template(json);
        return result;
    }
}


