const Session = require('../models/sessionModel');

const sessionController = {};

/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*/
// sessionController.isLoggedIn = (req, res, next) => {
//   // write code here
//   if (req.cookies.ssid) {
//     Session.find({cookieId: req.cookies.ssid})
//       .then((data) => {
//         // console.log('session found: ', data);
//         return next();
//       })
//   }
//   else {
//     return res.redirect('/signup');
//   }
// };

/**
* startSession - create and save a new Session into the database.
*/
sessionController.startSession = (req, res, next) => {
  try {
    // get the unique id from the create user middleware function
    const id = res.locals.user._id;
    // use session.create to add a session document to the session collection
    Session.create( { cookieId: id} )
      .then( () => {
        next();
      });
  }
  catch (err) {
    next(err);
  }
};

module.exports = sessionController;