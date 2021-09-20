var express = require('express');
var router = express.Router();
var userController= require('../../controller/res-controller');

router.get('/fetch-data',userController.fetchData);

module.exports = router;