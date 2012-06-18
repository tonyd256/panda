var user = require('../controllers/user.js').user;
var beer = require('../controllers/beer.js').beer;
var inventory = require('../controllers/inventory').inventory;

var items = {
  'user': user,
  'beer': beer,
  'inventory': inventory
};

exports.index = function(req, res) {
  res.render('index', { title: 'Express' });
}

exports.info = function (req, res) {
  res.send({
    name: 'Panda',
    what: 'Panda Board',
    says: 'What up!'
  });
}

exports.getItem = function (req, res) {
  var item = req.params.item;

  if (items[item]) {
    if (req.params.id) {
      items[item].get(req.params.id, function (err, result) {
        if (err) return res.send(err);
        res.send(result);
      });
    } else {
      items[item].get(function (err, result) {
        if (err) return res.send(err);
        res.send(result);
      });
    }
  } else {
    res.send(new Error(item + ' not found'));
  }
}

exports.postItem = function (req, res) {
  var item = req.params.item;

  if (items[item]) {
    items[item].post(req.body, function (err, result) {
      if (err) return res.send(err);

      res.send(result);
    });
  } else {
    res.send(new Error(item + ' not found'));
  }
}

exports.putItem = function (req, res) {
  var item = req.params.item;

  if (items[item]) {
    items[item].get(req.params.id, req.body, function (err, result) {
      if (err) return res.send(err);

      res.send(result);
    });
  } else {
    res.send(new Error(item + ' not found'));
  }
}