var mongoose = require('mongoose');

var Message = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Message', Message);