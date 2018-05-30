var express= require('express');
var path = require('path')
var open = require('open');
var compression = require('compression');
var bodyParser = require('body-parser');
var session = require('express-session');
var expressValidator = require('express-validator');

/*eslint-disable no-console */

const port = 3100;
const app = express();

app.use(compression());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//app.use(expressValidator());
app.use(expressValidator({
 customValidators: {
    notEquals: function(param, num) {
        return param != num;
    }
 }
}));

app.all('/*', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, authorization");
    next();
});

var productRoute = require('./api/site/product/route/productRoute.js');
new productRoute(app);

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`http://19.168.1.7:${port}`);
  }
});