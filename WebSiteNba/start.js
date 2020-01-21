var http = require('http');
var express = require('express');
var router = express.Router();
var app = express();

var playersRouter = require('./routes/players');
var teamsRouter = require('./routes/teams');

var app = express();
app.set('view engine', 'pug');

app.get('/', function (req, res) {
 res.render('index');  
});

app.listen(3000, function(){
    console.log('Example app listening port 3000!');
});

app.use('/players', playersRouter);
app.use('/teams', teamsRouter);

module.exports = app;