const mongoose = require('mongoose');

const User = require('./User');
const Thought = require('./Thought');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to database');
});
mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});


module.exports = {
  User,
  Thought,
};
