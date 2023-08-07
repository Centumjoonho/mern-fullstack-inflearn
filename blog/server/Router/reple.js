const express = require("express");
const router = express.Router();

const { Post } = require('../Model/Post');
const { Reple } = require('../Model/Reple');
const { User } = require('../Model/User');


router.post('/submit', (req, res) => {
    let data = {}
    User.findOne({ uid: req.body.uid }).exec().then((userInfo) => {
        data.author = userInfo._id;
        const CommunityReple = new Reple(data);
        CommunityReple.save().then((response) => {

            Post.findOneAndUpdate({ _id: response.postId, }, { $inc: { repleNum: 1 } }
            ).exec().then(() => {
                return res.status(200).json({ success: true });
            })

        })
    });
})

module.exports = router;