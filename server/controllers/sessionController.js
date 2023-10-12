const Session = require('../models/sessionModel');

const sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = (req, res, next) => {
  console.log('is logged in:', req.cookies.ssid);
  if (req.cookies.ssid) {
    console.log('looking for session...');
    Session.find({ cookieId: req.cookies.ssid }).then((data) => {
      console.log('session found: ', data);
      return next();
    });
  } else {
    return res.redirect('/signup');
  }
};

/**
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = async (req, res, next) => {
  try {
    // get the unique id from the create user middleware function
    const id = res.locals.user._id;
    // check to see if session already exists
    const found = await Session.findOne({ cookieId: req.cookies.ssid });
    if (found) return next();
    // if not, use session.create to add a session document to the session collection
    Session.create({ cookieId: id }).then(() => {
      next();
    });
  } catch (err) {
    next(err);
  }
};

/**
 * endSession - find and delete a user's Session from the database.
 */
sessionController.endSession = async (req, res, next) => {
  try {
    const session = await Session.findOneAndDelete({
      cookieId: req.cookies.ssid,
    });

    if (session === null)
      return next({
        log: 'Session not found in endSession',
        status: 500,
        message: { err: 'session not found' },
      });
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = sessionController;
