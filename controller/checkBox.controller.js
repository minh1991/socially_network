const CheckBox = require('../models/checkbox.model');
const dbConfig = require('../config/keys');
const Joi = require('joi');
const HttpStatus = require('http-status-codes');

module.exports = {
  async CheckBoxSubmit(req, res) {
    console.log('aaa ' + req.body + ' ' + typeof req.body);

    const { error } = req.body;
    const value = req.body;
    console.log('bbb ' + value + ' ' + typeof value);
    if (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json({ msg: error.details });
    }
    if (!value) {
      console.log('Không có dữ liệu');
    } else {
      // const body = value.map(item => {
      //   return item;
      // });
      // const body = value.toString();
      // console.log('sss ' + body + ' ' + typeof body);
      const body = { checkBoxFormArr: value };
      CheckBox.create(body)
        .then(item => {
          res.status(HttpStatus.CREATED).json({ message: 'nhập checkbox thành công', item });
        })
        .catch(err => {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'nhập checkbox bị lỗi' });
        });
    }
  }
};
