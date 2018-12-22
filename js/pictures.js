var handlebars = require('handlebars');
var fs = require('fs');
var http = require('http');

const inFile = 'pictures.hbs';
const outFile = 'header.html';

const source = fs.readFileSync(inFile, 'utf8');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    const result = template(data);
    res.write(result);
    res.end();
}).listen(8080);

const template = handlebars.compile(source, { strict: true });
