const { check } = require('express-validator');
const User = require('../models/UserModel');
const ExpressError = require('../ExpressError');

exports.registerValidation = [
  // check('email')
  //   .normalizeEmail({ gmail_remove_dots: false })
  //   .isEmail({})
  //   .withMessage('Invalid email address')
  //   .custom(async (val) => {
  //     const user = await User.findOne({ email: val });
  //     if (user) {
  //       throw new ExpressError('Email address already in use', 409);
  //     } else {
  //       return true;
  //     }
  //   }),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please confirm your password')
    .custom((val, { req }) => {
      if (val === req.body.password) return true;
      else throw new ExpressError('Passwords do not match', 300);
    }),
  check('username')
    .trim()
    .isLength({ min: 3 })
    .withMessage('username must be at least 3 characters')
    .custom(async (val) => {
      const user = await User.findOne({ username: val });
      if (user) {
        throw new ExpressError('Email address already in use', 409);
      } else {
        return true;
      }
    })
];

exports.loginValidation = [

  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  check('username')
    .trim()
    .isLength({ min: 3 })
    .withMessage('username must be at least 3 characters')
];

