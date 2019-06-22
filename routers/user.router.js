const express = require('express');
const router = express.Router();
const AuthHelper = require('../config/AuthHelper');
const UsersController = require('../controller/user.controller');

router.get('/all-users', AuthHelper.VerifiToken, UsersController.GetAllUsers);

module.exports = router;
