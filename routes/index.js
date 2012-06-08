var user = require('../controllers/user.js');

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

exports.getUser = function (req, res) {
  user.get(req.params.id, function (err, result) {
    if (err) return res.send(err);
    
    res.send(result);
  });
}

exports.postUser = function (req, res) {
  user.post(req.body, function (err) {
    if (err) return res.send(err);
    
    res.send();
  });
}

exports.putUser = function (req, res) {
  var data = req.body;
  data.id = req.params.id;
  
  user.put(data, function (err) {
    if (err) return res.send(err);
    
    res.send();
  });
}