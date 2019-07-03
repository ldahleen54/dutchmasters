//Main starting point for the app
const express = require('express');
const app = express();
var handlebars = require('handlebars');
var fs = require('fs');
const path = require('path');
var http = require('http');
var generator = require('./pagegenerator.js');

const json = require('./pages.json');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});

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
    var nav = generator.makeHeader();
    response.write(nav);
    if(url === "/index" || url === "") {
        response.write(generator.makeIndex());
    } else if( url === "/champions") {
        response.write(generator.makeChampions());
    } else if( url === "/history") {
        response.write(generator.makeHistory());
    } else if( url === "/pictures") {
        response.write(generator.makePictures());
    } else if( url === "/safety") {
        response.write(generator.makeSafety());
    } else if( url === "/scores") {
        response.write(generator.makeScores());
    } else if( url === "/videos") {
        response.write(generator.makeVideos());
    } else if( url === "/whattobring") {
        response.write(generator.makeWhatToBring());
    }
    response.end();
}).listen(8080);