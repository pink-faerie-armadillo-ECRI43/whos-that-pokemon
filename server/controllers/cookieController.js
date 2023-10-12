const cookieController = {};
const User = require('../models/userModel');

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
  // set secure cookie to the value of the users mongodb document _id
  res.cookie('ssid', res.locals.user._id, {httpOnly: true});
  return next();
}

module.exports = cookieController;