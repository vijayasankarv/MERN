var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var connectflash = require('connect-flash');

var routes = require('./routes/index');
var users = require('./routes/users');
var ex= require('./routes/exptest');
var film=require('./routes/film')
//var filmroute= require('./routes/filmroute');

var app = express();

var moviesRoute = require('./routes/film');
var mongoose=require('mongoose');
var dburl = 'mongodb://localhost/test';
mongoose.connect(dburl);
var mydb = mongoose.connection;

mydb.on("error", console.error.bind(console, "connection error : "));
mydb.once('open', function(){});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use('/',express.static(path.join(__dirname,'../client/dist/')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, '..client/dist/')));

app.use('/', routes);
app.use('/users', users);
app.use('/exp',ex);
app.use('/film',film);
app.use('/film/movieAdd', film);
app.use('/film/deleteMovie',film);
//app.use('/filmroute',filmroute);

//app.use('/moviesurl',moviesRoute);
// catch 404 and forward to error handler
 app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}); 

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
