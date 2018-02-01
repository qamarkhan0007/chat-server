var registerSchema = require('./model.js');

module.exports.register = function(req, res, next) {
  var data = {
      name: req.body.name,
      password: req.body.password,
      age: req.body.age,
      mobile: req.body.mobile,
      address: req.body.address
  };
  registerSchema.register(data, function(err, result){
    if(err){
      console.log(err.status);
      res.send({code: 400, data: err});
    }else {
      res.send({code: 200, data: result});
    }
  });
};
