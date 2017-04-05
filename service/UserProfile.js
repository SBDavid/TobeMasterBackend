var AV = require('leanengine');

var UserProfile = AV.Object.extend('UserProfile');

function userProfileService() {
};
    // 获取用户
userProfileService.prototype.get = function(account) {
    // account不能为空
    if (account == undefined) {
        return Promise.reject('account不能为空！');
    }
    var query = new AV.Query(UserProfile);

    query.equalTo('account', account);

    return query.find();
};
    // 保存用户
userProfileService.prototype.save = async function (account, name) {
    name = name || 'Nan';
    // account不能为空
    if (account == undefined) {
        return Promise.reject('account不能为空！');
    }
    try {
        var getUser = await userProfileService.prototype.get(account);
    } catch (err) {
        return Promise.reject(err);
    }
    if (getUser.length > 0) {
        return Promise.reject('account已存在！');
    }

    var user = new UserProfile();

    user.set('name', name);
    user.set('account', account);
    return user.save();
}

module.exports = userProfileService;
