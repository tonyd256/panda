var model = require('../models/inventory.js').mInventory;

exports.inventory = {
  get: function (id, cb) {
    if (typeof id === 'function') {
      cb = id;
      id = null;
    }

    if (id) {
      model.findById(id)
      .populate('beer')
      .populate('user', { password: 0 })
      .run(cb);
    } else {
      model.find({}, cb);
    }
  },
  // should start thinking about which slots of the machine
  // are loaded with the particular type of beer...
  // might need a separate endpoint to reverse lookup the 
  // inventory based on the index of a matrix of vendor spots...
  // (we'll need to have a way to know which type of beer was 
  // just vended if somebody takes out a beer from slot A6 
  // for example...)
  post: function (data, cb) {
    var b = new model({
      beer: data.beer,
      quantity: data.quantity,
      user: data.user
    });

    b.save(cb);
  }
}