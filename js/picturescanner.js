const handlebars = require('handlebars');
const fs = require('fs');
const http = require('http');
const express = require('express');
const chokidar = require('chokidar');

var app = express();
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server listening on port ', port);

const pictureDir = '../assets/img';
var watcher = chokidar.watch(pictureDir, {
    ignored: /[\/\\]\./, persistent: true
});

var log = console.log.bind(console);
let scanComplete = false;


const inFile = 'pictures.hbs';
const outFile = '.html';

const source = fs.readFileSync(inFile, 'utf8');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const result = template(inFile);
    res.write(result);
    watcher
    .on('add', function (path) {
      var appDir = "C:\Users\coe_ladahle\dutchmasters";
      // var imageDir = "\assets\";
      // var imageSuffix = ".jpg";
      log('File ', path, 'has been added')

      if (scanComplete) {
      //upload image
      
    }
    })
    .on('change', function (path, stats)
    {
        if (stats) log('File ', path, 'changed size to ', stats.size)
    })
    .on('addDir', function (path) {
      log('Directory', path, 'has been added'); 
    })
    .on('error', function (error) { log('Error ', error); })
    .on('ready', function () {
      log('Initial scan complete. Ready for changes.');
      scanComplete = true;
    })
    .on('raw', function (event, path, details) {
      log('Raw event info:', event, path, details);
    })

    res.end();
}).listen(8080);

const template = handlebars.compile(source, { strict: true });
