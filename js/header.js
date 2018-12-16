var handlebars = require('handlebars');
var http = require('http');

const data = {
  title: "Dutchmasters",
  champions: "pages/champions.html",
  history: "pages/history.html",
  pictures: "pages/pictures.html",
  safety: "pages/safety.html",
  scores: "pages/scores.html",
  videos: "pages/videos.html",
  whattobring: "pages/whattobring.html"
};

const source = `
<div class="container">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="#">Dutchmasters</a>
  </div>
  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav navbar-right">
    <li><a href={{champions}}>Champions</a></li>
    <li><a href={{history}}>History</a></li>
    <li><a href={{pictures}}>Pictures</a></li>
    <li><a href={{safety}}>Gun Safety</a></li>
    <li><a href={{scores}}>Score Sheets</a></li>
    <li><a href={{videos}}>Videos</a></li>
    <li><a href={{whattobring}}>What to Bring</a></li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services<span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Design</a></li>
          <li><a href="#">Development</a></li>
          <li><a href="#">Consulting</a></li>
        </ul>
      </li>

    </ul>
  </div>
</div>
`;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const template = handlebars.compile(source, { strict: true });
    const result = template(data);
    res.write(result);
    res.end();
    var context = {title: "My New Post", body: "This is my first post!"};
    var html    = template(context);
}).listen(8080);

// var source   = document.getElementById("entry-template").innerHTML;

// const result = template(data);
// console.log(result);
