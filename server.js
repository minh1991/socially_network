const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

mongoose.Promise = global.Promise;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('mongoDb đã chạy');
  })
  .catch(err => {
    console.log(err);
  });

const app = express();
app.get('/', (req, res) => {
  return res.send('xin chào');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server đã chạy ở port ${port}`);
});
