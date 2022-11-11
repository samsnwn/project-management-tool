const express = require('express');
const router = express.Router();
const {registrationController, loginController} = require('../controllers/authController');
const { checkingUser } = require('../validation/registerValidation');
const { userValidation } = require('../validation/schemaValidation');

router.post('/register', checkingUser, userValidation, registrationController)
router.post('/login', userValidation, loginController)

module.exports = router