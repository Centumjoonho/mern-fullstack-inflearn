import { React, useState, useEffect } from "react";
import { UploadButtonDiv, UploadDiv, UploadForm } from "../../Style/UploadCSS.js";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Upload = (props) => {

  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const navigate = useNavigate();


  const onSubmit = (e) => {

    e.preventDefault();

    if (Title === "" || Content === "") {
      return alert("Please fill out All");
    }
    // body 집어넣는 변수는 db 칼럼 명과 맞춰야한다 
    let body = {
      title: Title,
      content: Content,
    };

    axios.post("/api/post/submit", body).then((response) => {
      if (response.data.success) {
        alert("글 작성이 완료 되었습니다.")
        navigate("/");
      }
      else {
        alert("글 작성이 실패 되었습니다.")
      }
    }).catch((err) => {
      console.log(err);
    })

    let Arr = [...props.ContentList];
    Arr.push(Content);
    props.setContentList([...Arr]);
    //새로운값 입력해야지
    setTitle("");
    setContent("");
  };

  // useEffect를 빈 배열로 작성시 딱 한번만 실행 됨
  useEffect(() => { }, [/*useEffect가 실행될 조건*/ Content]);

  return (
    <UploadDiv>
      <UploadForm>
        <h3>Upload</h3>
        <label >제목</label>
        <input
          id="title"
          type="text"
          value={Title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
        <label >내용</label>

        <textarea
          id="content"
          type="text"
          value={Content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />

        <UploadButtonDiv

        >
          <button
            onClick={(e) => {
              onSubmit(e);
            }}>제출</button>

        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
};

export default Upload;
