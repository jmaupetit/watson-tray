var express = require('express');
var path = require('path');
var nunjucks = require('nunjucks');
var routes = require('./routes/index');
var dateFilter = require('nunjucks-date-filter');

var app = express();

// template engine

var env = nunjucks.configure(path.join(__dirname, 'views/'), {
    autoescape: true,
    watch: true,
    express: app
});

// routes

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../node_modules')));
app.use('/', routes);

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
    res.render('error.html', {
      message: err.message,
      error: err
    });
  });
}

// // production error handler
// // no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error.html', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
