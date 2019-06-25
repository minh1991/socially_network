const express = require('express');
const router = express.Router();
const AuthHelper = require('../config/AuthHelper');
const UsersController = require('../controller/user.controller');

router.get('/all-users', AuthHelper.VerifiToken, UsersController.GetAllUsers);
router.get('/:id', AuthHelper.VerifiToken, UsersController.GetUserById)
router.get('/:username', AuthHelper.VerifiToken, UsersController.GetUserByUsername)


module.exports = router;
