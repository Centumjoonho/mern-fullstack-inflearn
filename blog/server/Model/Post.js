const { default: mongoose } = require("mongoose")

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    postNum: Number,
    image: String,
    secret: Boolean,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    repleNum: {
        type: Number,
        default: 0,
    },
}, { collection: "Posts", timestamps: true })

const Post = mongoose.model("Post", postSchema);

module.exports = { Post }; 