var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var cors = require("cors");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
var config = require("./config/config");
mongoose.connect(config.dbUrl,function(err){
  if(err){
    console.log('connect is error');
  }else{
    console.log('connect mongodb server is success');
  }
});

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var options = {
  url:config.dbUrl,
  collection:"sessions"
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(session({
//     secret: 'liuzhen88',
//     store: new MongoStore(options),
//     resave: true, 
//     saveUninitialized: true
// }));

// app.use(function(req,res,next){
//   var hour = 3600000;
//   req.session.cookie.expires = new Date(Date.now() + hour);
//   req.session.cookie.maxAge = hour;
//   next();
// });

app.use('/', routes);
app.use('/users', users);

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

app.listen('8000',function(){
  console.log('Node.js server start at port 8000');
});

module.exports = app;
