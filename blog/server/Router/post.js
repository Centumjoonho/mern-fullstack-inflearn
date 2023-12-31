const express = require("express");
const router = express.Router();

const { Post } = require("../Model/Post.js");
const { Counter } = require("../Model/Counter.js");
const { User } = require('../Model/User.js')
const setUpload = require("../Util/upload.js");



router.post("/submit", (req, res) => {
  // 제출 버튼 누르면 api로 날라온 값 :
  // 데이터 정렬화 
  // let data = req.body;
  let data = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    secret: req.body.secret,
  }

  // data : { title: 'test2', content: 'test2', Image: data , uid}

  // mongodb -> Counter Collections에 가서 name 이 Counter인거를 찾는다
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      // postNum ->  data.변수명 -> 집합 안에 해당 인자가 생성된다 !
      data.postNum = counter.postNum;

      User.findOne({ uid: req.body.uid }).exec().then((userInfo) => {

        data.author = userInfo._id;

        // Post collections 에 data 저장
        const CommunityPost = new Post(data);
        CommunityPost.save().then(() => {
          // data 저장 성공하면 Counter collections에 가서 postNum + 1
          Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(
            () => { res.status(200).json({ success: true }); }
          );
        });


      })

    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/list", (req, res) => {
  let sort = {};

  if (req.body.sort === "최신순") {
    sort.createdAt = -1;
  }
  else {
    sort.repleNum = -1;
  }
  console.log(req.body.searchTerm);

  Post.find({
    $or: [
      { title: { $regex: req.body.searchTerm } },
      { content: { $regex: req.body.searchTerm } },
    ],
  })
    .populate("author")
    .sort(sort)
    .skip(req.body.skip)
    .limit(5) // 한번에 찾을 doc 숫자
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/detail", (req, res) => {
  Post.findOne({ postNum: Number(req.body.postNum) })
    .populate("author")
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, post: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/edit", (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    secret: req.body.secret,
  };

  Post.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/delete", (req, res) => {
  Post.deleteOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "images/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// //.single('file') -> 파일 하나만 업로드
// const upload = multer({ storage: storage }).single("file");

// router.post("/image/upload", (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       res.status(400).json({ success: false });
//     } else {
//       res.status(200).json({ success: true, filePath: res.req.file.path });
//     }
//   });
// });

// 미들웨어 사용법 기억하기 ! 
router.post(
  "/image/upload",
  setUpload("centum-community", "post/"),
  (req, res, next) => {
    console.log(res.req) // setUpload 함수로 받아오는 값 전부 다 
    res.status(200).json({ success: true, filePath: res.req.file.location });

  });

module.exports = router;
