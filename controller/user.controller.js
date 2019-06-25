const User = require('../models/user.model');
const HttpStatus = require('http-status-codes');
const messenger = require('../supports/messengers');
const format = require('string-format');

module.exports = {
  async GetAllUsers(req, res) {
    try {
      await User.find({})
        .populate('posts.postId')
        .populate('following.followed')
        .populate('followers.follower')
        .then(allUsers => {
          res.status(HttpStatus.OK).json({ message: messenger.MSG0012, allUsers });
        })
        .catch(err => {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: format(messenger.MSG0000, 'All Users') });
          console.log(err);
        });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: format(messenger.MSG0000, 'All Users') });
      console.log(error);
    }
  },

  async GetUserById(req, res) {
    try {
      await User.findOne({ _id: req.params.id })
        .populate('posts.postId')
        .populate('following.followed')
        .populate('followers.follower')
        .then(user => {
          res.status(HttpStatus.OK).json({ message: format(messenger.MSG0014, 'Id'), user });
        })
        .catch(err => {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: format(messenger.MSG0000, 'GetUserById') });
          console.log(err);
        });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: format(messenger.MSG0000, 'GetUserById') });
      console.log(error);
    }
  },

  async GetUserByUsername(req, res) {
    try {
      await User.findOne({ username: req.params.username })
        .populate('posts.postId')
        .populate('following.followed')
        .populate('followers.follower')
        .then(user => {
          res.status(HttpStatus.OK).json({ message: format(messenger.MSG0014, 'Username'), user });
        })
        .catch(err => {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: format(messenger.MSG0000, 'GetUserByUsername') });
          console.log(err);
        });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: format(messenger.MSG0000, 'GetUserByUsername') });
    }
  }
};
