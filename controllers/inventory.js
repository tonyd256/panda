var model = require('../models/inventory.js').mInventory;

exports.inventory = {
  get: function (id, cb) {
    if (typeof id === 'function') {
      cb = id;
      id = null;
    }

    if (id) {
      model.findById(id, cb);
    } else {
      model.find({}, cb);
    }
  },
  post: function (data, cb) {
    var b = new model({
      beer: data.beer,
      quantity: data.quantity,
      user: data.user
    });

    b.save(cb);
  }
}