var http = require('http');
var express = require('express');
var router = express.Router();
var app = express();
var unirest = require("unirest");

var req = unirest("GET", "https://free-nba.p.rapidapi.com/players");

req.query({
	"page": "0",
	"per_page": "25"
});

req.headers({
	"x-rapidapi-host": "free-nba.p.rapidapi.com",
	"x-rapidapi-key": "c86fdafd32msh19bc6d58a4432cfp1e56c2jsn7f2d69f42040"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

module.exports = router;