var http = require('http');
var express = require('express');
var app = express();

var unirest = require("unirest");

var req = unirest("GET", "https://free-nba.p.rapidapi.com/teams");

req.query({
	"page": "0"
});

req.headers({
	"x-rapidapi-host": "free-nba.p.rapidapi.com",
	"x-rapidapi-key": "c86fdafd32msh19bc6d58a4432cfp1e56c2jsn7f2d69f42040"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

app.listen(3000, function(){
    console.log('Example app listening port 3000! |TEAMS|');
});
