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
    return next(err);
  }
};

userController.getUserHighScore = async (req, res, next) => {
  try{
    const {username} = req.body
    const user = await User.findOne({username});
    const userHighScore = user.userHighScore;
    res.status(200).json({userHighScore});
  } catch(err) {
    return next({
      log: 'Error caught in getUserHighScore middleware',
      status:400,
      message: {err: 'Cannot get userHighSCore'}
    });
  }
};

userController.deleteUser = async (req, res, next) =>{
  try{
    const username = req.body.username;
    await User.findOneAndDelete({username});
    return next();
  } catch (err){
    return next({
      log: 'Error caught in deleteUser middleware',
      status:400,
      message: {err: 'Cannot delete student'}
    });
  }
};

// loginUser takes the req.body and compares the username against what appears in the db.
// If the username exists, it then does a check to see if the password provided checks with
// the bcrypted password stored in the db. If either the username or passwrod don't check out,
// it gives a generic response, but logs whether it was an incorrect username or password in
// the terminal. 
// userController.loginUser = async (req, res, next) => {
//     try {
//         const { username, password } = req.body;
//         const existingUser = await User.findOne({username: username});
//         if (existingUser) {
//             const result = await bcrypt.compare(password, existingUser.password);
//             if (result) {
//                 res.locals.existingUser = existingUser;
//                 return next();
//             } else {
//                 return next({
//                     log: 'Incorrect paswword.',
//                     status: 401,
//                     message: 'Incorrect user name or password.'
//                 })
//             }            
//         } else {
//             return next({
//                 log: 'Incorrect username.',
//                 status: 401,
//                 message: 'Incorrect user name or password.'
//             })
//         }
//     } catch (err) {
//         return next({
//             log: 'Error in userController.loginUser middleware.',
//             status: 500,
//             message: 'Unable to login at this time.'
//         })
//     }
// }

module.exports = userController;