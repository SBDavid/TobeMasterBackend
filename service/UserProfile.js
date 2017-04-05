var AV = require('leanengine');

var UserProfile = AV.Object.extend('UserProfile');

var userProfile = {
    // 获取用户
    get: function(account) {
        // account不能为空
        if (account == undefined) {
            return Promise.reject('account不能为空！');
        }

        var query = new AV.Query(UserProfile);

        query.equalTo('account', account);

        return query.find();
    },
    // 保存用户
    save: function (account, name) {
        name = name || 'Nan';

        // account不能为空
        if (account == undefined) {
            return Promise.reject('account不能为空！');
        }

        var userProfile = new UserProfile();

        userProfile.set('name', name);
        userProfile.set('account', account);
        return userProfile.save();
    }
};

module.exports = userProfile;
