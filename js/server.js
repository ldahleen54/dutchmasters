//Main starting point for the app
var handlebars = require('handlebars');
var fs = require('fs');
var http = require('http');
var header = require('./header.js');

const inFile = 'header.hbs';
const outFile = 'header.html';

const json = require('./pages.json');

const source = fs.readFileSync(inFile, 'utf8');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    
    
    let val = header.headerMake();
    res.write(val);
    res.end();
}).listen(8080);





