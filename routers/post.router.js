const express = require('express')
const router = express.Router()
const AuthHelper = require('../config/AuthHelper')
const PostController = require('../controller/post.controller')

router.post('/add-post', AuthHelper.VerifiToken, PostController.AddPost)

module.exports = router
