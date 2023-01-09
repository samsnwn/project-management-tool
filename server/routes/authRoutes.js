const express = require('express');
const router = express.Router();
const {registrationController, loginController} = require('../controllers/authController');
const { checkingUser } = require('../validation/registerValidation');
const { userValidation } = require('../validation/schemaValidation');

router.post('/register', registrationController)
router.post('/login', loginController)

module.exports = router