var mongoose = require('mongoose');

var User = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String
    }
});

User.methods.added = function () {
    console.log(this.name, ' is added');
};

module.exports = mongoose.model('User', User);