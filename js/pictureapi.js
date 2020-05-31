var handlebars = require('handlebars');
var express = require('express');
var app = express();
var fs = require('fs');

// const inFile = 'header.hbs';

const data = require('./pages.json');
// const source = fs.readFileSync(inFile, 'utf8');

// var appDir = global.rootDir;
var appDir = "/home/luke/dutchmasters";
var imageDir = "https://dutchmasters.s3.us-east-2.amazonaws.com/";
// var imageDir = "/assets/img/";
var imageSuffix = ".jpg";

//to retrieve image use /images/(name)
app.get("/images/:id/:year", function (request, response) {
    console.log("params: " + request.params["year"]);
    var path = imageDir + request.params.year + "/" + request.params.id + imageSuffix;
    console.log("fetching image: ", path);
    response.redirect(path);
});
app.get("/images/:id", function (request, response) {
    console.log("params: " + request.params["id"]);
    var path = imageDir + request.params.id + imageSuffix;
    console.log("fetching image: ", path);
    response.redirect(path);
});
app.listen(5000);
// const template = handlebars.compile(source, { strict: true });
