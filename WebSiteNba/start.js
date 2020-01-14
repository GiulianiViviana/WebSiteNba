var http = require('http');
var express = require('express');
var app = express();

var getheaders = {
    "x-rapidapi-host": "free-nba.p.rapidapi.com",
	"x-rapidapi-key": "c86fdafd32msh19bc6d58a4432cfp1e56c2jsn7f2d69f42040"
};

var optionsget = {
    host : 'https://free-nba.p.rapidapi.com',
    port :80,
    path : '/players/%7Bid%7D',
    headers : getheaders,
    method : 'GET'
};

var reqGet = http.request(optionsget, function(res) {
    console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);

      res.on('data', function(d) {
        console.info('GET result:\n');
        process.stdout.write(d);
        console.info('\n\nCall completed');
    });

});

reqGet.end();
reqGet.on('error', function(e) {
    console.error(e);
});

app.listen(3000, function(){
    console.log('Example app listening port 3000!');
});
