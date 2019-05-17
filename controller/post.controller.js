const Joi = require('joi')
const Post = require('../models/post.model')
const User = require('../models/user.model')
const messenger = require('../supports/messengers')
const HttpStatus = require('http-status-codes')
const format = require('string-format')

module.exports = {
    async AddPost(req, res) {
        try {
            // console.log('addPost', req.body)
            const schema = Joi.object().keys({
                post: Joi.string().required().min(1)
            });
            const { error, value } = Joi.validate(req.body, schema);
            // console.log('post value--', value)
            if (error && error.details) {
                return res.status(HttpStatus.BAD_GATEWAY).json({ msg: error.details })
            }
            const dataPost = {
                user: req.user._id,
                username: req.user.username,
                post: value.post,
                createdAt: Date.now(),
            }
            // console.log('dataPost--', dataPost)
            // CREATE DB
            Post.create(dataPost).then(async post => {
                await User.update({
                    _id: req.user._id
                }, {
                        $push: {
                            posts: {
                                postId: post._id,
                                post: req.body.post,
                                createdAt: Date.now()
                            }
                        }
                    })
                res.status(HttpStatus.CREATED).json({ message: format(messenger.MSG0002, 'Post'), post })
                // console.log('post--', post)
            }).catch(err => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: format(messenger.MSG0000, 'Post') })
                console.log(err)
            })
        } catch (error) {
            console.log(error)
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: format(messenger.MSG0000, 'addPost') })
        }
    }
}