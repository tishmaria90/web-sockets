var User = require(__dirname + '/../models/user.js');

exports.store = function (userData) {
    var user = {
        name: userData.name,
    };

    return new User(user).save();
};

exports.show = function (id) {
    return User.findOne(id);
};

exports.check = function (userData) {
    return User
        .findOne({name: userData.name})
        .then(function (doc) {
            return Promise.resolve(doc)
        });
};

exports.test = function () {
    User.find((error, users) => {console.log(users)});
};