const express = require('express');
const router = express.Router();

const CheckBoxController = require('../controller/checkBox.controller');

router.post('/feed', CheckBoxController.CheckBox);

module.exports = router;
