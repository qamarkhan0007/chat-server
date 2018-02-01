var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var registerSchema = new Schema({
  name: { type: String },
  password: { type: String },
  age: { type: String },
  mobile: { type: String },
  address: { type: String }
});

var mySchema = module.exports = mongoose.model('registers', registerSchema);

module.exports.register = function(data, callback){
  var obj = new mySchema(data);
  obj.save(callback);
};

module.exports.login = function(condition, callback){
  console.log(condition);
  mySchema.findOne({name: condition.name}, callback);
};
