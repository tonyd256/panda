var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sBeer = new Schema({
  name: { type: String, required: true },
  style: { type: String, required: true },
  creator: { type: Schema.ObjectId, required: true, ref:'user' },
  bottled: { type: Date, required: true },
  description: String,
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

exports.mBeer = mongoose.model('beer', sBeer);