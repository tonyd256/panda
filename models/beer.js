var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// other possible attributes:
// + ABV
// + volume per container (12oz bottle vs 16oz bottle)
// other thoughts:
// + should we separate out beer categories? (into it's own table)
//   ... this would be so we could have status and recommend beers by type
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