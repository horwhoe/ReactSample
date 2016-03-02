'use strict'

var express = require('express');
var reactViews = require('express-react-views');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('config');
var session = require('express-session');
var favicon = require('serve-favicon');
var methodOverride = require('method-override');
var defineRoutes = require('./dist/routes/routes');


var app = express();

var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8088;

/**
 * Using CORS to reduce CROSS Origine.
 */
app.use(cors());

// all environments
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

// setting session, need to be set before passport
app.use(session({
  secret: 'mySecretKey',
  resave: true,
  saveUninitialized: true,
  cookie: {
    //secure: true,
    maxAge: 3000000
  }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(favicon(__dirname + '/public/img/ico.png'));
//app.use(methodOverride());

// load moongoose database
//mongoose.connect(config.get('mongodb').database, function (err) {
//  if (err) {
//    console.error(err);
//    global.mongoIsBad = true;
//  } else {
//    console.log("Connected to database");
//  }
//});

defineRoutes(app);

// start http server
app.listen(port, ipaddr);
console.log("Server running at http://" + ipaddr + ":" + port + "/");
