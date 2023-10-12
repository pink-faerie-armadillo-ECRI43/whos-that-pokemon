const express = require('express');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

const router = express.Router();
router.use(express.json())

// Route to handle user registration using the createUser middleware from userController.
router.post('/signup', userController.createUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  return res.status(200).json(res.locals.user);
})

router.delete('/delete' , userController.deleteUser, (req, res) => {
  return res.status(200).json({username: res.locals.username});
});
// Route to handle user login using the loginUser middleware from userController.
// Returns a JSON response indicating that the user is logged in.
// router.post('/login', userController.loginUser, (req, res) => {
//   return res.status(200).json('User is logged in');
// })

module.exports = router;