const express = require('express');
const router = express.Router();

const AuthHelper = require('../config/AuthHelper');
const FriendsController = require('../controller/friend.controller');


router.post('/follower', AuthHelper.VerifiToken, FriendsController.PostFollowerUsers);

module.exports = router;
