var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/Content'));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function (req,res){
   res.render('index.html');
});

app.get('/Shared/menu-navbar', function (req,res){
   res.render('Shared/menu-navbar.html');
});

app.get('/registerUser', function (req,res){
   res.render('RegisterUser.html');
});



var server = http.createServer(app);

server.listen(3000);