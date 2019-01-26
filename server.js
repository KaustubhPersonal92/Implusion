var express = require('express');
var path = require('path')
var open = require('open');
var compression = require('compression');
var bodyParser = require('body-parser');
var session = require('express-session');
var expressValidator = require('express-validator');
var cookieParser = require('cookie-parser');

var app = express();

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
    next();
});

app.set('port', (process.env.PORT || 8080));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.use(express.static(path.resolve(__dirname, 'build')));

app.post('/data', function(req, res) {
    console.log(req.body);
});


const router = require('./server/serverRoute');
router(app);


// app.get('/*', function (req, res, next) {
//     res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
//     next();
// });









app.listen(app.get('port'), function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Server started ', app.get('port'));
    }
});
