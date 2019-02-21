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

    const result = template(json);
    res.write(result);
    
    let val = header.headerMake();
    res.write(val)
    res.end();
    // var context = {title: "My New Post", body: "This is my first post!"};
    // var html    = template(context);1
}).listen(8080);

// var source   = document.getElementById("entry-template").innerHTML;
const template = handlebars.compile(source, { strict: true });


