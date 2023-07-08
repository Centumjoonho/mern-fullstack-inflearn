const express = require('express');
const path = require("path");
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// MongoDB
// mongodb+srv://ghwnsgkgk:wnsgh774@cluster0.nt2e5j0.mongodb.net/?retryWrites=true&w=majority
// body-parser
// 미들웨어 설정
app.use(express.static(path.join(__dirname, '../client/build'))); // JSON 파싱을 위한 미들웨어

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



// 라우트 정의
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});



const { Post } = require("./Model/Post.js");
const { Counter } = require("./Model/Counter.js");

app.post('/api/post/submit', (req, res) => {
    // 제출 버튼 누르면 api로 날라온 값 : 
    let data = req.body;

    // data : { title: 'test2', content: 'test2', postNum: undefined}

    // mongodb -> Counter Collections에 가서 name 이 Counter인거를 찾는다 
    Counter.findOne({ name: "counter" }).exec().then((counter) => {

        // postNum -> 치환
        data.postNum = counter.postNum;

        // Post collections 에 data 저장
        const CommunityPost = new Post(data);
        CommunityPost.save()
            .then(() => {
                // data 저장 성공하면 Counter collections에 가서 postNum + 1
                Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } })
                    .then(() => {
                        res.status(200).json({ success: true });
                    })

            });

    }).catch(err => {
        res.status(400).json({ success: false });
    });


});


app.post('/api/post/list', (req, res) => {
    Post.find().exec().then((doc) => {
        res.status(200).json({ success: true, postList: doc });
    })
        .catch(err => {
            res.status(400).json({ success: false });
        })
});


app.post('/api/post/detail', (req, res) => {
    Post.findOne({ postNum: Number(req.body.postNum) }).exec().then((doc) => {
        console.log(doc);
        res.status(200).json({ success: true, post: doc });
    })
        .catch(err => {
            res.status(400).json({ success: false });
        })
});





/*
1. post mongodb model
2. client css (bootstrap, emotion)
*/


// 서버 시작
app.listen(port, () => {
    mongoose.connect('mongodb+srv://ghwnsgkgk:wnsgh774@cluster0.nt2e5j0.mongodb.net/community?retryWrites=true&w=majority')
        .then(() => {
            console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
            console.log(`MongoDB가 연결 되었습니다. `);
        }).catch((err) => {
            console.log(`${err}`)
        })

});