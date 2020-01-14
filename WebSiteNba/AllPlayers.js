var req = unirest("GET", "https://free-nba.p.rapidapi.com/players");

req.query({
	"page": "0",
	"per_page": "25"
});

req.headers({
	"x-rapidapi-host": "free-nba.p.rapidapi.com",
	"x-rapidapi-key": "SIGN-UP-FOR-KEY"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});