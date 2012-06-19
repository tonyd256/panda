var model = require('../models/beer.js').mBeer;

exports.beer = {
  get: function (id, cb) {
    if (typeof id === 'function') {
      cb = id;
      id = null;
    }

    if (id) {
      model.findById(id)
      .populate('creator', { password: 0 })
      .run(cb);
    } else {
      model.find({}, cb);
    }
  },
  post: function (data, cb) {
    var b = new model({
      name: data.name,
      style: data.style,
      creator: data.creator,
      bottled: data.bottled,
      description: data.description
    });

    b.save(cb);
  },
  put: function (id, data, cb) {
    model.findById(id, function (err, beer) {
      if (err) return cb(err);

      data.name && (beer.name = data.name);
      data.style && (beer.style = data.style);
      data.description && (beer.description = data.description);
      data.updated = Date.now();

      beer.save(cb);
    });
  }
}