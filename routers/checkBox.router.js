const express = require('express');
const router = express.Router();

const CheckBoxController = require('../controller/checkBox.controller');

router.post('/checkbox-submit', CheckBoxController.CheckBoxSubmit);

module.exports = router;
