const User = require('../models/user.model')
const messenger = require('../supports/messengers')
const HttpStatus = require('http-status-codes')
const format = require('string-format')


module.exports = {
    async PostFollowerUsers(req, res) {
        try {
            const followUser = async () => {
                await User.update({
                    _id: req.user._id,
                    'following.followed': { $ne: req.body.followed }
                }, {
                        $push: {
                            following: { folowed: req.body.followed }
                        }
                    })

                await User.update({
                    _id: req.body.followed,
                    'followers.follower': { $ne: req.user._id }
                }, {
                        $push: {
                            followers: { follower: req.user._id }
                        }
                    })
            }
            followUser()
                .then(() => {
                    res.status(HttpStatus.OK).json({ message: format(messenger.MSG0013, 'Following') })
                })
                .catch(err => {
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: format(messenger.MSG0011, 'Following'), err })
                })
        } catch (error) {
            res.status(HttpStatus.METHOD_FAILURE).json({ message: format(messenger.MSG0000, 'PostFollowerUsers'), error })
        }
    }
}