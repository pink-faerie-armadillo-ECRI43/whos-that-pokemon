const { User } = require('../models/userModels');
const { v4: uuidv4 } = require('uuid');

const cookieController = {};

const sessions = {};

cookieController.setSSIDCookie = async (req, res, next) => {
  const sessionId = uuidv4();
  const { username, _id } = res.locals.existingUser;
  sessions[sessionId] = { username, userId: _id };
  res.cookie('SSID', `session=${sessionId}`);
  console.log('I am in cookieController');
  return next();
};

module.exports = cookieController;
