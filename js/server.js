//Main starting point for the app
var handlebars = require('handlebars');
var fs = require('fs');
var http = require('http');
var header = require('./header.js');
var champions = require('./champions.js');


const json = require('./pages.json');

http.createServer(function (request, response) {
    const { headers, method, url } = request;
    const userAgent = headers['user-agent'];

    var body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
    }).on('error', (err) => {
        response.writeHead(404);
        response.write('The contents you are looking for are not found');
        console.error(err);
    });
    
    response.writeHead(200, {'Content-Type': 'text/html'});    
    var nav = header.headerMake();
    response.write(nav);
    if( url === "/champions") {
        response.write(champions.makeChampions());
    }
    response.end();
}).listen(8080);





