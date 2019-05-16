const express = require('express')
const router = express.Router()

const PostController = require('../controller/post.controller')

router.post('/add-post', PostController.AddPost)

module.exports = router
