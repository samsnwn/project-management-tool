const express = require('express');
const router = express.Router();
const {registrationController, loginController} = require('../controllers/authController');
const {registerValidation, loginValidation} = require('../handlers/userValidation')
const {validate} = require('../handlers/validation')
const tokenHandler = require('../handlers/tokenHandler');
const User = require("../models/UserModel");



router.post('/register', registerValidation, validate,registrationController)
router.post('/login', loginValidation, validate, loginController)

router.post('/verify-token', tokenHandler.verifyToken, (req, res) => {
    res.status(200).json({user: req.user})
})

module.exports = router