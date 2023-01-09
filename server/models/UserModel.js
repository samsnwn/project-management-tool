const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require("bcrypt");


const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Please provide a username']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minLength: 6
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            //  THIS ONLY WORKS ON CREATE AND SAVE!!!
            validator: function(el) {
                return el === this.password
            },
            message: 'Passwords do not match'
        }
    }
})

//  This function fires before the save function is executed
UserSchema.pre('save', async function(next) {
    // Only run this function if password is modified
    if(!this.isModified('password')) return next();

    // Hash the pass with cost of 12
    this.password = await bcrypt.hash(this.password, 12)

    // Delete password confirm
    this.confirmPassword = undefined
    next()
})

// This function compares passwords
UserSchema.methods.correctPassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password)
}

const User = mongoose.model('User', UserSchema);

module.exports = User;