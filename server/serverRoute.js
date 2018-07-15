var express= require('express');
var path = require('path')
var open = require('open');
var compression = require('compression');
var bodyParser = require('body-parser');
var session = require('express-session');
var expressValidator = require('express-validator');

/*eslint-disable no-console */

//const port = 3100;

module.exports = function(app) {
  var productRoute = require('./api/site/product/route/productRoute.js');
  new productRoute(app);

}

// app.listen(port, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`http://19.168.1.7:${port}`);
//   }
// });