//Main starting point for the app
const express = require('express');
const app = express();
var fs = require('fs');
const path = require('path');
var generator = require('./pagegenerator.js');

// aws access 
process.env.AWS_ACCESS_KEY_ID     = process.env.BUCKETEER_AWS_ACCESS_KEY_ID;
process.env.AWS_SECRET_ACCESS_KEY = process.env.BUCKETEER_AWS_SECRET_ACCESS_KEY;
process.env.AWS_REGION            = 'us-east-1';
var AWS = require('aws-sdk');
var s3  = new AWS.S3();

const json = require('./pages.json');

app.listen(process.env.PORT || 3000, function (request, response) {

    // TODO Make each generator call a middleware function
    // const { headers, method, url } = request;
    // const userAgent = headers['user-agent'];

    // var body = [];
    // request.on('data', (chunk) => {
    //     body.push(chunk);
    // }).on('end', () => {
    //     body = Buffer.concat(body).toString();
    // }).on('error', (err) => {
    //     response.writeHead(404);
    //     response.write('The contents you are looking for are not found');
    //     console.error(err);
    // });
    
    var nav = generator.makeHeader();
    // response.write(nav);
    app.get('/index', function(req, res){
        res.write(nav);
        res.write(generator.makeIndex());
        res.end();
    });
    app.get('', function(req, res){
        res.write(nav);
        res.write(generator.makeIndex());
        res.end();
    });
    app.get('/', function(req, res){
        res.write(nav);
        res.write(generator.makeIndex());
        res.end();
    });
    app.get('/pictures', function(req, res){
        res.write(nav);
        res.write(generator.makePictures());
        res.end();
    });
    app.get('/champions', function(req, res){
        res.write(nav);
        res.write(generator.makeChampions());
        res.end();
    });
    app.get('/history', function(req, res){
        res.write(nav);
        res.write(generator.makeHistory());
        res.end();
    });
    app.get('/safety', function(req, res){
        res.write(nav);
        res.write(generator.makeSafety());
        res.end();
    });
    app.get('/scores', function(req, res){
        res.write(nav);
        res.write(generator.makeScores());
        res.end();
    });
    app.get('/videos', function(req, res){
        res.write(nav);
        res.write(generator.makeVideos());
        res.end();
    });
    app.get('/whattobring', function(req, res){
        res.write(nav);
        res.write(generator.makeWhatToBring());
        res.end();
    });
    app.get('/bring', function(req, res){
        res.write(nav);
        res.write(generator.makeWhatToBring());
        res.end();
    });
});