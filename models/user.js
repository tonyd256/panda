var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sUser = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

exports.mUser = mongoose.model('user', sUser);