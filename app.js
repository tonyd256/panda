
/**
 * Module dependencies.
 */

var express = require('express');
var config = require('./config.js')
var routes = require('./routes');
var mongoose = require('mongoose');

mongoose.connect(config.dbConString);

var app = module.exports = express.createServer();

// Configuration

app.configure( function () {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/info', routes.info);

// general endpoints
app.get('/:item', routes.getItem);
app.get('/:item/:id', routes.getItem);
app.post('/:item', routes.postItem);
app.put('/:item/:id', routes.putItem);

app.listen(process.env.PORT, function () {
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
