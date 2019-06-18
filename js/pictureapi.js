var handlebars = require('handlebars');
var express = require('express');
var app = express();
var fs = require('fs');

// const inFile = 'header.hbs';

const data = require('./pages.json');

// const source = fs.readFileSync(inFile, 'utf8');

// var appDir = global.rootDir;
var appDir = "/home/luke/dutchmasters";
var imageDir = "/assets/img/";
var imageSuffix = ".jpg";

//to retrieve image use /images/(name)

app.get("/images/:id", function (request, response) {
    var path = imageDir + request.params.id + imageSuffix;
    console.log("fetching image: ", path);
    response.sendFile(path, { root: appDir });
});

app.listen(5000);
// const template = handlebars.compile(source, { strict: true });
