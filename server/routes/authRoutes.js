const express = require('express');
const router = express.Router();
const {registrationController} = require('../controllers/authController');
const { checkingUser } = require('../validation/registerValidation');
const { userValidation } = require('../validation/schemaValidation');

router.post('/register', checkingUser, registrationController)

module.exports = router