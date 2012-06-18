var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sInventory = new Schema({
  beer: { type: Schema.ObjectId, required: true, ref: 'beer' },
  quantity: { type: Number, required: true },
  user: { type: Schema.ObjectId, require:true, ref: 'user' },
  created: { type: Date, default: Date.now }
});

exports.mInventory = mongoose.model('inventory', sInventory);