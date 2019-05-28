const express = require('express')
const router = express.Router()
const AuthHelper = require('../config/AuthHelper')
const PostController = require('../controller/post.controller')

router.post('/add-post', AuthHelper.VerifiToken, PostController.AddPost)
router.get('/all-posts', AuthHelper.VerifiToken, PostController.GetAllPosts)
router.post('/all-like', AuthHelper.VerifiToken, PostController.AddLike)

module.exports = router
