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

// Returns a JSON response indicating that the user is logged in.
router.post('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  return res.status(200).json(res.locals.user);
})

module.exports = router;