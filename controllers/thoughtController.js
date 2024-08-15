const Thought = require('../models/Thought'); // Adjust the path as necessary
const User = require('../models/User'); // To update the user with new thoughts

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find().populate('reactions');
      res.status(200).json(thoughts);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }},

  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findById(req.params.id).populate('reactions');
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this ID' });
      }
      res.status(200).json(thought);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }},

  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } });
      res.status(201).json(thought);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }},

  async updateThought(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this ID' });
      }
      res.status(200).json(thought);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }},


  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.id);
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this ID' });
      }
      await User.findByIdAndUpdate(thought.userId, { $pull: { thoughts: req.params.id } });
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }},

  async addReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: req.body } },
        { new: true, runValidators: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this ID' });
      }
      res.status(201).json(thought);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }},

  async removeReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this ID' });
      }
      res.status(200).json(thought);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }},};
