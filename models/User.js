const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please provide your name'],
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowerCase: true
    },
    password: {
        type: String,
        required: [true, 'Please provide your password'],
        minlength: 6
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;