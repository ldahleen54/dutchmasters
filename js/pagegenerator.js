//This is a component file that generates the champions page body
var handlebars = require('handlebars');
var fs = require('fs');


const json = require('./pages.json');



module.exports = {
    makeHeader: function() {
        var inFile = 'header.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json)
        return result;
    },
    makeChampions: function() {
        var inFile = 'champions.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json);
        return result;
    },
    makeHistory: function() {
        var inFile = 'history.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json);
        return result;
    },
    makePictures: function() {
        var inFile = 'pictures.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json);
        return result;
    },
    makeSafety: function() {
        var inFile = 'safety.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json);
        return result;
    },
    makeScores: function() {
        var inFile = 'scores.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json);
        return result;
    },
    makeVideos: function() {
        var inFile = 'videos.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json);
        return result;
    },
    makeWhatToBring: function() {
        var inFile = 'whattobring.hbs';
        var source = fs.readFileSync(inFile, 'utf8');
        var template = handlebars.compile(source, { strict: true });
        var result = template(json);
        return result;
    }
    
}


