
const mongoose = require('mongoose');
const validator = require('validator');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid Email'
        }
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',

    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
