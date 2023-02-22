var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
});

var User = mongoose.model('User', schema);
module.exports = User;
