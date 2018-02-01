var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var registerSchema = new Schema({
  name: { type: String },
  password: { type: String },
  age: { type: String },
  mobile: { type: String },
  address: { type: String }
});

var userReg = module.exports = mongoose.model('registers', registerSchema);

module.exports.register = function(data, callback){
  console.log(data);
  var obj = new userReg(data);
  obj.save(callback);
};
