var mongoose = require('mongoose');
mongoose.connect(process.env.DB_PATH, {
    useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true
});

module.exports = mongoose;