const User = require('../models/User');

module.exports = {
async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }},

  async getUser(req, res) {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }},

    
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }},
  async updateUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }},
  async deleteUser(req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'User was succsefuly deleted' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }},
  async addFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
      req.params.id,
      { $push: { friends: req.params.friendId } },
      { new: true });
      if (!user) {
        return res.status(404).json({ message: 'No user found with this ID' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }},

  async deleteFriend
  (req, res) {
    try {
      const user = await User.findById
      req.params.id,
      { $pull: { friends: req.params.friendId } },
      { new: true };
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }},
  
  };
