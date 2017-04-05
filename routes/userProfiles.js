var express = require('express');
var router = express.Router();
var AV = require('leanengine');

var responseUtils = require('./utils/response');
var userProfileService = require('../service/UserProfile');

// 查询用户
router.get('/get/:account', function(req, res, next) {

    userProfileService.get(req.params.account).then(
        function(userProfile) {
            res.send(responseUtils.success(userProfile));
        },
        function(err) {
            res.send(responseUtils.fail(err));
        })
});

// 添加用户
router.post('/regist', function(req, res, next) {

  userProfileService.save(req.body.account, req.body.name).then(
  	function(userProfile) {
      res.send(responseUtils.success(userProfile));
    },
    function(err) {
      res.send(responseUtils.fail(err));
  	})
});

module.exports = router;