const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [isEmail, 'Invalid email']
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;