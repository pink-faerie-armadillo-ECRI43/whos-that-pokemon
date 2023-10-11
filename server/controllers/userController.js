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
userController.verifyUser = (req, res, next) => {
  try {
    const {username, password} = req.body;
    User.findOne({username: username})
      .then(async (user) => {
        if (user.length > 0) {
          const result = await bcrypt.compare(password, user[0].password)
          if (result === true) {
            console.log('User found:', user[0]);
            res.locals.user = user[0];
            return next();
          }
        }
        // console.log('test');
        return res.redirect('/signup');
      })
  }
  catch (err) {
    return next(err);
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