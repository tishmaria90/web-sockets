let mongoose = require(__dirname + '/database');
let db = mongoose.connection;

exports.open = () => {
    db.on('error', console.error.bind(console, 'connection error:'));
};
