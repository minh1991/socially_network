const express = require('express')
const router = express.Router()

const AuthController = require('../controller/authentication.controller')

router.post('/signup', AuthController.CreateUser)
router.post('/login', AuthController.LoginUser)

module.exports = router
