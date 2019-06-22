const User = require('../models/user.model');
const HttpStatus = require('http-status-codes');
const messenger = require('../supports/messengers');
const format = require('string-format');

module.exports = {
  async GetAllUsers(req, res) {
    try {
      await User.find({})
        .populate('posts.postId')
        .then(result => {
          res.status(HttpStatus.OK).json({ message: messenger.MSG0012, result });
        })
        .catch(err => {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: format(messenger.MSG0000, 'All Users') });
          console.log(err);
        });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: format(messenger.MSG0000, 'All Users') });
      console.log(error);
    }
  }
};
