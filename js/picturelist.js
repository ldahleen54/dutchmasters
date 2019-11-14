var fs = require('fs');
var handlebars = require('handlebars');
var http = require('http');
var pictureapi = require('./pictureapi.js');

var files = fs.readdirSync('../assets/img');
const inFile = 'header.hbs';
const outFile = 'header.html';
const json = require('./pages.json');

const source = fs.readFileSync(inFile, 'utf8');

for(var i = 0; i < files.length; i++)
{
    console.log(files[i]);
}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    const result = template(json);
    res.write(result);
    res.write('<p>');
    var output = '';
    for(var i = 0; i < files.length; i++){
        output = '<img src=\"http://localhost:5000/images/' + files[i] + '\">';
        output = output.replace('.jpg', '');
        output = output.replace('.JPG', '');
        res.write(output);        
    }
    res.write('</p>');
    res.end();
    // var context = {title: "My New Post", body: "This is my first post!"};
    // var html    = template(context);
}).listen(8080);

const template = handlebars.compile(source, { strict: true });