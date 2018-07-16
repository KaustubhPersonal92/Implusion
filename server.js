var express = require('express');
var path = require('path')
var open = require('open');
var compression = require('compression');
var bodyParser = require('body-parser');
var session = require('express-session');
var expressValidator = require('express-validator');


const app = express();
const url ='http://ec2-54-191-213-64.us-west-2.compute.amazonaws.com:'
/*eslint-disable no-console */

app.set('port', (process.env.PORT || 8080));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




app.use(express.static(path.resolve(__dirname, 'build')));

const router = require('./server/serverRoute');
router(app);


app.get('/*', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});



app.listen(app.get('port'), function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Server started ', url+app.get('port'));
    }
});