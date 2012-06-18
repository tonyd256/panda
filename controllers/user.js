var model = require('../models/user.js').mUser;

exports.user = {
  get: function (id, cb) {
    if (id) {
      model.findById(id, cb);
    } else {
      model.find({}, cb);
    }
  },
  post: function (data, cb) {
    var u = new model({
      name: data.name,
      email: data.email,
      password: data.password
    });

    u.save(cb);
  },
  put: function (id, data, cb) {
    model.findById(id, function (err, user) {
      if (err) return cb(err);

      data.name && (user.name = data.name);
      data.email && (user.email = data.email);
      data.password && (user.password = data.password);
      user.updated = Date.now();

      user.save(cb);
    });
  }
}