var express = require('express');
var router = express.Router();
var controller = require('./controller.js');

router.post('register', controller.register);

module.exports = router;
