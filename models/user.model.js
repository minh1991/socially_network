const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  posts: [
    {
      postId: { type: mongoose.Schema.Types.ObjectId, ref: "posts" },
      post: { type: String },
      createdAt: { type: Date, default: Date.now() }
    }
  ],
  date: {
    type: Date,
    default: Date.now()
  }
});
// exports model ra để sử dụng
const User = mongoose.model('users', UserSchema);
module.exports = User;
