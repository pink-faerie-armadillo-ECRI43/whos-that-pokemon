const { User } = require('../models/pokemonModels');
const fetch = require('node-fetch');
const bcrypt = require('bcrypt');

const userController = {};

// NOTE! We did not get a chance to implement the auth features outlined here. We ran
// out of time, but for the lucky team that gets to work on our project, have at it.
// The two middleware functions below do work though using postman.

// createUser takes the req.body and checks to see if that username exists in the db.
// If it does, it prompts the user to enter a different username. If it doesn't exist,
// then the password gets encrypted and a new user is created in the db.
userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      return next({
        log: 'Username already exists.',
        status: 400,
        message: 'Username already exists, select a different username.',
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      await User.create({ username: username, password: hashedPassword });
      console.log('User created');
      return next();
    }
  } catch (err) {
    return next({
      log: 'Error in userController.createUser middleware.',
      status: 500,
      message: 'Could not create user.',
    });
  }
};
// loginUser takes the req.body and compares the username against what appears in the db.
// If the username exists, it then does a check to see if the password provided checks with
// the bcrypted password stored in the db. If either the username or passwrod don't check out,
// it gives a generic response, but logs whether it was an incorrect username or password in
// the terminal.
userController.loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      const result = await bcrypt.compare(password, existingUser.password);
      if (result) {
        res.locals.existingUser = existingUser;
        return next();
      } else {
        return next({
          log: 'Incorrect paswword.',
          status: 401,
          message: 'Incorrect user name or password.',
        });
      }
    } else {
      return next({
        log: 'Incorrect username.',
        status: 401,
        message: 'Incorrect user name or password.',
      });
    }
  } catch (err) {
    return next({
      log: 'Error in userController.loginUser middleware.',
      status: 500,
      message: 'Unable to login at this time.',
    });
  }
};

module.exports = userController;
