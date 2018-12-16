var handlebars = require('handlebars');
var http = require('http');


const data = {
  title: "Dutchmasters",
  home: "index.html",
  champions: "pages/champions.html",
  history: "pages/history.html",
  pictures: "pages/pictures.html",
  safety: "pages/safety.html",
  scores: "pages/scores.html",
  videos: "pages/videos.html",
  whattobring: "pages/whattobring.html"
};

const source = `
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>Bootstrap 101 Template</title>

  <!-- Bootstrap -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</head>
<div class ="container">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </buton>
    <a class="navbar-brand" href={{home}}>Dutchmasters</a>
  </div>
  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav navbar-right">
    <h1>{{title}}</h1>
    <li><a href={{champions}}>Champions</a></li>
    <li><a href={{history}}>History</a></li>
    <li><a href={{pictures}}>Pictures</a></li>
    <li><a href={{safety}}>Gun Safety</a></li>
    <li><a href={{scores}}>Score Sheets</a></li>
    <li><a href={{videos}}>Videos</a></li>
    <li><a href={{whattobring}}>What to Bring</a></li>
  </div>
</div>
`;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('hello world!');
    const result = template(data);
    res.write(result);
    res.end();
}).listen(8080);


const template = handlebars.compile(source, { strict: true });
const result = template(data);
