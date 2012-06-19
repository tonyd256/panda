var crypto = require('crypto');
var model = require('../models/user.js').mUser;

exports.user = {
  get: function (id, cb) {
    if (typeof id === 'function') {
      cb = id;
      id = null;
    }

    if (id) {
      model.findById(id)
      .exclude('password')
      .run(cb);
    } else {
      model.find({})
      .exclude('password')
      .run(cb);
    }
  },
  post: function (data, cb) {
    var u = new model({
      name: data.name,
      email: data.email,
      password: crypto.createHash('md5').update(data.password).digest('hex')
    });

    u.save(cb);
  },
  put: function (data, cb) {
    model.findById(data.id, function (err, user) {
      if (err) return cb(err);

      data.name && (user.name = data.name);
      data.email && (user.email = data.email);
      data.password && (user.password = crypto.createHash('md5').update(data.password).digest('hex'));
      user.updated = Date.now();

      user.save(cb);
    });
  }
}