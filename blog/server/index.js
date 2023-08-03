const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const config = require("./config/key");

// MongoDB
// mongodb+srv://id:pw@cluster0.nt2e5j0.mongodb.net/?retryWrites=true&w=majority
// body-parser
// 미들웨어 설정
app.use(express.static(path.join(__dirname, "../client/build"))); // JSON 파싱을 위한 미들웨어

app.use("/images", express.static("./images"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/post", require("./Router/post.js"));

app.use("/api/user", require("./Router/user.js"));

// 라우트 정의
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

/*
1. post mongodb model
2. client css (bootstrap, emotion)
*/

// 서버 시작
app.listen(port, () => {
  mongoose
    .connect(
      config.mongoURI
    )
    .then(() => {
      console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
      console.log(`MongoDB가 연결 되었습니다. `);
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});
