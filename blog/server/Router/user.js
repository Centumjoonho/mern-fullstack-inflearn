const express = require("express");
const router = express.Router();

const { Post } = require("../Model/Post.js");
const { Counter } = require("../Model/Counter.js");
const { User } = require("../Model/User.js");


router.post('/register', (req, res) => {

    let data = req.body;

    Counter.findOne({ name: "counter" }).then((counter) => {
        data.userNum = counter.userNum;
        const userData = new User(data);
        userData.save().then(() => {
            // data 저장 성공하면 Counter collections에 가서 postNum + 1
            Counter.updateOne({ name: "counter" }, { $inc: { userNum: 1 } }).then(
                () => {
                    res.status(200).json({ success: true });
                });
        });
    }).catch(err => {
        console.error(err);
        res.status(400).json({ success: false, message: err.message });
    })

})


module.exports = router;