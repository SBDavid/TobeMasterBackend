var AV = require('leanengine');

var UserProfile = AV.Object.extend('UserProfile');

var userProfile = {
    // 获取用户

    // 保存用户
    save: function (req, res) {
        var name = req.body.name;
        var userProfile = new UserProfile();

        userProfile.set('name', name);
        return userProfile.save(null, {sessionToken: req.sessionToken});
    }
};

module.exports = userProfile;
