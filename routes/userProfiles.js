var express = require('express');
var router = express.Router();
var AV = require('leanengine');

var responseUtils = require('./utils/response');
var userProfileService = require('../service/UserProfile');

router.post('/regist', function(req, res, next) {

  userProfileService.save(req, res).then(
  	function(userProfile) {
      res.send(responseUtils.success(userProfile));
    },
    function(err) {
      res.send(responseUtils.fail(JSON.stringify(err)));
  	})
});

module.exports = router;