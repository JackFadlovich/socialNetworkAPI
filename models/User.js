const mongoose = require('mongoose');
//makes schema for user
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]});

const User = mongoose.model('User', userSchema);

module.exports = User;
