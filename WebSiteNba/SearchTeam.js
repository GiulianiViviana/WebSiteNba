var unirest = require("unirest");

var req = unirest("GET", "https://free-nba.p.rapidapi.com/teams/%7Bid%7D");

req.headers({
	"x-rapidapi-host": "free-nba.p.rapidapi.com",
	"x-rapidapi-key": "SIGN-UP-FOR-KEY"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});