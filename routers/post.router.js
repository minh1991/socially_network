const express = require('express')
const router = express.Router()
const AuthHelper = require('../config/AuthHelper')
const PostController = require('../controller/post.controller')

router.post('/add-post', AuthHelper.VerifiToken, PostController.AddPost)
router.get('/all-posts', AuthHelper.VerifiToken, PostController.GetAllPosts)
router.get('/all-posts/:id', AuthHelper.VerifiToken, PostController.GetPost)
router.post('/add-like', AuthHelper.VerifiToken, PostController.AddLike)
router.post('/add-comment', AuthHelper.VerifiToken, PostController.AddComment)

module.exports = router
