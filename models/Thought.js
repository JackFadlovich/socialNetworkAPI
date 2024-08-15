const mongoose = require('mongoose');
const moment = require('moment');
const reactionSchema = new mongoose.Schema({
  reactionBody: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => moment(timestamp).format('YYYY-MM-DD'),
  },});

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => moment(timestamp).format('YYYY-MM-DD'),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema], // Embed the Reaction schema
}, {
  toJSON: { getters: true },
  id: false,
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
