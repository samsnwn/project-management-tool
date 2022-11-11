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
        res.send('Successful registration')
    } catch (err) {
        next(new ExpressError('Failed to register user', 300))
    }
}


// login function
exports.loginController = async (req, res, next) => {
    const {email, password} = req.body

    try {
        const user = await User.findOne({ email: email})
        if(await bcrypt.compare(password, user.password)) {
            req.session.user = await User.findOne({ email: email}).select('-password')
            console.log(req.session.user)
            res.json(req.session.user)
        } else {
            throw new ExpressError('Invalid email or password', 300)
        }
    } catch (err) {
        next(new ExpressError('Invalid email or password', 300))
    }
}