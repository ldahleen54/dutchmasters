var handlebars = require('handlebars');
var fs = require('fs');
var http = require('http');

const inFile = 'header.hbs';
const outFile = 'header.html';

const data = require('./info.json');

const source = fs.readFileSync(inFile, 'utf8');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    const result = template(data);
    res.write(result);
    res.end();
    // var context = {title: "My New Post", body: "This is my first post!"};
    // var html    = template(context);
}).listen(8080);

// var source   = document.getElementById("entry-template").innerHTML;
const template = handlebars.compile(source, { strict: true });
// const result = template(data);
// console.log(result);
