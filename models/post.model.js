const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },

    username: { type: String, default: '' },
    post: { type: String, default: '' },

    comments: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
            name: { type: String, default: '' },
            comment: { type: String, default: '' },
            creatAt: { type: Date, default: Date.now() }
        }
    ],

    likes: [
        {
            username: { type: String, ref: "users" }
        }
    ],

    totalLikes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now() }
})
// exports model ra để sử dụng
const Post = mongoose.model('posts', PostSchema)
module.exports = Post
