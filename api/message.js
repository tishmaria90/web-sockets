var Message = require(__dirname + '/../models/message');

exports.index = (request, response) => {
    return Message.find().populate('author');
};

exports.store = (data) => {
    data.author = data.author.id

    let new_message = new Message(data);

    new_message.save((error) => {
        if (error) {
            return console.error(error);
        }
    });

    return new_message;
};

