const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const ExpressError = require("../ExpressError");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Registration function
exports.registrationController = async (req, res, next) => {
  const { username, password, confirmPassword } = req.body;
  try {
    //  Check if username is already in use
    const existingUser = await User.findOne({ username });
    // If it does not exist:
    if (!existingUser) {
      const newUser = await User.create({
        username,
        password,
        confirmPassword,
      });

      const token = signToken(newUser._id);

      res
        .status(201)
        .json({ status: "success", token, user: newUser });
    } else {
      // Username already in use
      next(new ExpressError("Username already in use", 300));
    }
  } catch (err) {
    next(new ExpressError("Failed to register user", 500));
  }
};

// login function
exports.loginController = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    //  2) Check if user exists
    const user = await User.findOne({ username }).select('password username');

    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new ExpressError("Invalid email or password", 401));
    }

    user.password = undefined
    //  3) If everything is ok, send token to client
    const token = signToken(user._id);
    res.status(200).json({
      status: "success",
      user,
      token,
      login: true,
    });
  } catch (err) {
    return next(new ExpressError("Invalid email or password", 500));
  }
};
