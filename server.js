var express = require('express');
var path = require('path')
var open = require('open');
var compression = require('compression');
var bodyParser = require('body-parser');
var session = require('express-session');
var expressValidator = require('express-validator');
var cookieParser = require('cookie-parser');


var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'build')));

const router = require('./server/serverRoute');
router(app);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/*', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});






app.listen(app.get('port'), function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Server started ', app.get('port'));
    }
});
