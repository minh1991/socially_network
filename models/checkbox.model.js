const mongoose = require('mongoose');
const CheckBoxSchema = new mongoose.Schema({
  checkBoxFormArr: {
    type: Object
  },
  date: {
    type: Date,
    default: Date.now
  }
});
// exports model ra để sử dụng
const CheckBox = mongoose.model('checkbox', CheckBoxSchema);
module.exports = CheckBox;
