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
    },

    async GetAllPosts(req, res) {
        // console.log(req);
        try {
            const posts = await Post.find({})
                .populate('users')
                .sort({ createdAt: -1 })
            return res.status(HttpStatus.OK)
                .json({ message: format(messenger.MSG0009, 'All Posts'), posts })
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: format(messenger.MSG0010, 'All Posts') })
        }
    },

    async AddLike(req, res) {
        try {
            const likeId = req.body._id
            await Post.update({ _id: likeId, 'likes.username': { $ne: req.users.username } }, {
                $push: {
                    likes: {
                        username: req.body.username
                    }
                },
                $inc: { totalLikes: 1 }
            }).then(() => {
                res.status(HttpStatus.OK).json({ message: format(messenger.MSG0002, 'Like') })
            }).catch((err) => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: format(messenger.MSG0011, 'Like') })
            })
        } catch (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: format(messenger.MSG0011, 'Like') })
        }
    },

    async AddComment(req, res) {
        try {
            // console.log("req.body", req.body)
            const postId = req.body.postId
            // console.log('postId--', postId)
            await Post.update({ _id: postId }, {
                $push: {
                    comments: {
                        userId: req.user._id,
                        username: req.body.username,
                        comment: req.body.comment,
                        creatAt: new Date()
                    }
                }

            }).then(() => {
                res.status(HttpStatus.OK).json({ message: format(messenger.MSG0002, 'Comment') })
            }).catch((err) => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: format(messenger.MSG0011, 'Comment') })
            })
        } catch (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: format(messenger.MSG0011, 'Comment') })
        }
    },

    async GetPost(req, res) {
        try {
            // console.log(req.params.id)
            await Post.findOne({ _id: req.params.id })
                .populate('users')
                .populate('comments.userId')
                .then(post => {
                    // console.log("post--", post)
                    res.status(HttpStatus.OK).json({ message: format(messenger.MSG0002, 'GetPost'), post })
                    // console.log('aasdfas');
                })
                .catch(err => {
                    return res.status(HttpStatus.NOT_FOUND)
                        .json({ message: format(messenger.MSG0011, 'GetPost') })
                })
        } catch (error) {
            console.log(error);
            return res.status(HttpStatus.NOT_FOUND)
                .json({ message: format(messenger.MSG0011, 'GetPost') })
        }
    }
}