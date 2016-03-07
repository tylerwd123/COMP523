var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var fs = require('fs');
var cheerio = require('cheerio');
// our modules
var ttgenerator = require(__dirname + '/' + 'truthtablegenerator.js');


app.use(express.static('public'));
app.use(cookieParser());



app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html"); 
})


app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html");
})

app.get('/register.html', function (req, res) {
   res.sendFile( __dirname + "/" + "register.html");
})

app.get('/accountcreation.html', function (req, res) {
   res.sendFile( __dirname + "/" + "accountcreation.html");
})
app.get('/userhome.html', function (req, res) {
   res.sendFile( __dirname + "/" + "userhome.html");
})

// get the length of the gamepage.html
var gplength;
fs.stat(__dirname + "/" + "gamepage.html", function(err,stats){
	if(err){
		return console.error(err);
	}
	gplength = stats.size;
})

// displays the gamepage by first reading the gamepage file
app.get('/gamepage.html', function (req, res) {
/*	fs.open(__dirname + "/" + "gamepage.html", 'r', function(err,fd){
		if(err){
		return console.error(err);
		}
		var buffer = new Buffer(gplength);
		fs.read(fd,buffer, 0, buffer.length, 0, function(err, bytes){
			
		});
		res.setHeader('Content-Type', 'text/html');
		res.send(buffer);
		// close file
		fs.close(fd,function(err){
			if(err){
				console.log(err);
			}
		});
		res.end();

	});*/

	res.sendFile( __dirname + "/" + "gamepage.html");
	response = ttgenerator.generate();
//	response = {number:Math.random()};
//	console.log(response.statement1);
//	console.log(response);
	res.end(JSON.stringify(response));

})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})