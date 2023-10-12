const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  userHighScore: {type: Number, default: 0}
});

userSchema.pre( 'save' , async function (next) {
  const user = this;
  console.log(user);
  if (this.isModified('password')){ 
    user.password = await bcrypt.hash(this.password, SALT_WORK_FACTOR)
  }
  return next();
})

module.exports = mongoose.model('User', userSchema);