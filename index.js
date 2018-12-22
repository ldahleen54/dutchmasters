var handlebars = require('handlebars');
var http = require('http');
var path = require('path');

global.rootDir = __dirname;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
}).listen(8080);
