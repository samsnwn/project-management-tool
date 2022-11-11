const User = require('../models/UserModel')
const bcrypt = require("bcrypt");
const ExpressError = require("../ExpressError");


// Registration function

exports.registrationController = async (req, res, next) => {
    const user = req.body
    try {
        const newUser = new User(user)

        // Password encryption
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        newUser.password = hash;

        await newUser.save()
        console.log(newUser)
        res.send('Successful registration')
    } catch (err) {
        next(new ExpressError('Failed to register user', 300))
    }
}