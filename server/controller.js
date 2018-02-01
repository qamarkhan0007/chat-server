var schema = require('./model.js');

module.exports.register = function(req, res, next) {
  var data = {
      name: req.body.name,
      password: req.body.password,
      age: req.body.age,
      mobile: req.body.mobile,
      address: req.body.address
  };
  schema.register(data, function(err, result){
    if(err){
      console.log(err.status);
      res.send({code: 400, data: err});
    }else {
      res.send({code: 200, data: result});
    }
  });
};

module.exports.login = function(req, res, next) {
  var data = {
    name: req.body.username,
    password: req.body.password
  };
  schema.login(data, function(err, result){
    if(!err && result !== null) {
      res.send({code: 200, data: result});
    }else {
      res.send({code: 400, data: null});
    }
  });
};
