const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
* After 1 hour (3600 seconds), the session will automatically be removed from the collection
*/
const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 3600 , default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);