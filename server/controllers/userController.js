const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const userController = {};

/**
* createUser - create and save a new User into the database.
*/
userController.createUser = async (req, res, next) => {
  try {
    // get username and password from request body
    const credentials = req.body;
    const user = await User.create( credentials )
    // store new user document in res.locals to send back to client
    res.locals.user = user;
    // continue to next function in middleware chain
    return next();
  }
  catch (err) {
    console.log('Error trigger at create user');
    return res.redirect('/signup');
  }
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = async (req, res, next) => {
  try {
    // deconstruct request body for credentials
    const { username , password } = req.body;
    // look up user in DB
    const user = await User.findOne( { username: username } )
    // handle uknown user with global error handler
    if (user === null) return next({
      log: 'User not found userController.loginUser middleware.',
      status: 500,
      message: 'User validation failed.'
    })
    // compare password in db to password provided by user
    const result = await bcrypt.compare(password, user.password);
    // if password matches, continue to next middleware function
    if (result === true) {
      res.locals.user = user;
      return next();
    } else { // else, throw global error handler
      return next({
        log: 'Password doesnt match userController.loginUser middleware.',
        status: 500,
        message: 'User validation failed.'
      })
    }
  }
  catch (err) {
    return next({
      log: 'Error in userController.loginUser middleware.',
      status: 500,
      message: 'Unable to login at this time.'
    });
  }
};

module.exports = userController;