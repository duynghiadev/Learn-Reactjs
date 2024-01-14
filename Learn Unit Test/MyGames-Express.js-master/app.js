var express = require('express');

var app = express();

var http_IP = '127.0.0.1';  
var http_port = 3000;

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// home
app.get('/', routes.home);

// games
app.get('/games/:game_number?', routes.games);

// Page Not Found
app.get('*', routes.notFound);


//run our application
app.listen(process.env.PORT || http_port, function() {
	console.log("The application is running on http://" + http_IP + ':' + http_port);
});