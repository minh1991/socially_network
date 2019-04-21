const express = require('express');
const router = express.Router();

const AuthController = require('../controller/authentication.controller');

router.post('/signup', AuthController.CreateUser);

module.exports = router;
