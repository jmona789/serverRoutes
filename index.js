// Create a website with 4 routes:
// -Home
// -Favorite Food
// -Favorite Movies
// -Favorite CSS Frameworks
// Serve the HTML from files rather than straight in the JavaScript

var http = require('http'), url = require('url'), fs = require('fs');

var PORT = 8080;

var handleRequest = function (req, res) {
  console.log('req.url', req.url);
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/':
      display_root(req, res);
      break;
    case '/favoritefoods':
      display_favfood(req, res);
      break;
    case '/favoritecssframeworks':
      display_favcss(req, res);
      break;
    default:
      display_404(req, res);
      break;
  }

}

var display_root = function(req, res) {
  fs.readFile("home.html", "utf8", function(err, data){
    if (err){
      console.log(err);
    }
    else{
      var myHTML = data;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(myHTML);
    }
  })
}

var display_favfood = function(req, res) {
  fs.readFile("favfoods.html", "utf8", function(err, data){
    if (err){
      console.log(err);
    }
    else{
      var myHTML = data;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(myHTML);
    }
  })
}


var display_favcss = function(req, res) {
  fs.readFile("favcss.html", "utf8", function(err, data){
    if (err){
      console.log(err);
    }
    else{
      var myHTML = data;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(myHTML);
    }
  })
}

var display_404 = function(req, res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write("<h1>Not found</h1>");
  res.end("This is not the page you are looking for");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});