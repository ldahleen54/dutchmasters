var handlebars = require('handlebars');
var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');
var path = require('path')

const inFile = 'header.hbs';
const outFile = 'header.html';

const data = require('./pages.json');

const source = fs.readFileSync(inFile, 'utf8');

var appDir = path.dirname(require.main.filename);
var imageDir = "/assets/";
var imageSuffix = ".jpg";

app.get("/images/:id", function (request, response) {
    var path = imageDir + request.params.id + imageSuffix;
    console.log("fetching image: ", path);
    response.sendFile(path, { root: "/home/luke/dutchmasters/" });
});

app.listen(8080);
const template = handlebars.compile(source, { strict: true });
