const express = require("express");
const router = express.Router();

const { Counter } = require("../Model/Counter.js");
const { User } = require("../Model/User.js");
const setUpload = require("../Util/upload.js");


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

router.post('/name_check', (req, res) => {
    User.findOne({ displayName: req.body.displayName }).exec().then((doc) => {
        // 등록 안되어 있을때
        let check = true;
        if (doc) {
            //등록 되어 있을때 
            check = false;
        }
        res.status(200).json({ success: true, check });
    }).catch(err => {
        console.error(err);
        res.status(400).json({ success: false, message: err.message });
    })
});

// 미들웨어 사용법 기억하기 ! 
router.post(
    '/image/profile',
    setUpload("centum-community", "user/"),
    (req, res, next) => {
        res.status(200).json({ success: true, filePath: res.req.file.location });

    });


router.post(
    '/image/profile/update', (req, res) => {
        let data = { photoURL: req.body.photoURL, }
        User.updateOne({ uid: req.body.uid }, { $set: data }).exec().then(() => {
            res.status(200).json({ success: true });
        }).catch(err => {
            res.status(400).json({ error: err.message, success: false });
        })

    });

module.exports = router;