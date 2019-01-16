var fs = require('fs');
var handlebars = require('handlebars');
var http = require('http');

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
    for(var i = 0; i < files.length; i++)
    {
        res.write("<img src= C:\Users\coe_ladahle\assets\img\\", files[i], "> </img>");
    }
    res.end();
    // var context = {title: "My New Post", body: "This is my first post!"};
    // var html    = template(context);
}).listen(8080);

const template = handlebars.compile(source, { strict: true });