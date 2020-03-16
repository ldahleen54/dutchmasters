//this file generates each of the pages and is used by server.js
var handlebars = require('handlebars');
var fs = require('fs');

const json = require('./pages.json');

module.exports = {
    makeHeader: function() {
        var inFile = './pages/header.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json)
        return result;
    },
    makeChampions: function() {
        var inFile = './pages/champions.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json);
        return result;
    },
    makeHistory: function() {
        var inFile = './pages/history.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json);
        return result;
    },
    makePictures: function() {
        var inFile = './pages/pictures.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json);
        return result;
    },
    makeSafety: function() {
        var inFile = './pages/safety.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json);
        return result;
    },
    makeScores: function() {
        var inFile = './pages/scores.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json);
        return result;
    },
    makeVideos: function() {
        var inFile = './pages/videos.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json);
        return result;
    },
    makeWhatToBring: function() {
        var inFile = './pages/whattobring.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json);
        return result;
    },
    makeIndex: function() {
        var inFile = './pages/index.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json);
        return result;
    }    
}