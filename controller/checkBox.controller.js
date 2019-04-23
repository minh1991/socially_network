const CheckBox = require('../models/checkbox.model');
const dbConfig = require('../config/keys');
const Joi = require('joi');
const HttpStatus = require('http-status-codes');

module.exports = {
  async CheckBox(req, res) {
    console.log(req.body.id);
    // const schema = Joi.array().keys({
    //   checkBoxFormArr: Joi.object().required()
    // });
    // const { error, value } = Joi.validate(req.body, schema);
    // console.log(value);
    // if (error) {
    //   return res.status(HttpStatus.BAD_GATEWAY).json({ msg: error.details });
    // }
    // const dataCheckBox = {
    //   checkbox: value.checkBoxFormArr
    // };

    // CheckBox.create(dataCheckBox)
    //   .then(check => {
    //     res.status(HttpStatus.CREATED).json({
    //       message: 'CheckBox OK',
    //       check
    //     });
    //   })
    //   .catch(err => {
    //     res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'CheckBox xảy ra lỗi' });
    //     console.log(err);
    //   });
  }
};
