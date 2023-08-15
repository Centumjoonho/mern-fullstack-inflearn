import { React, useState, useEffect } from "react";
import { UploadButtonDiv, UploadDiv, UploadForm } from "../../Style/UploadCSS.js";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ImageUpload from "./ImageUpload.js";
import { useSelector } from "react-redux";
import Secret from "./Secret.js";


const Upload = (props) => {

  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Image, setImage] = useState("");
  const [Secret_Check, setSecret_Check] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const user = useSelector((state => state.user))

  useEffect(() => {
    if (!user.accessToken) {
      navigate("/login");
      alert("로그인한 회원만 글을 작성할 수 있습니다.");

    }


  }, [])

  const handleOptionChange = () => {
    setSecret_Check(true);
  };

  const onSubmit = (e) => {

    e.preventDefault();

    if (Title === "" || Content === "") {
      return alert("Please fill out All");
    }
    // body 집어넣는 변수는 db 칼럼 명과 맞춰야한다 
    let body = {
      title: Title,
      content: Content,
      image: Image,
      uid: user.uid,
      secret: Secret_Check,
    };

    axios.post("/api/post/submit", body).then((response) => {
      if (response.data.success) {
        alert("글 작성이 완료 되었습니다.")
        navigate("/list");
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

        <ImageUpload setImage={setImage}></ImageUpload>

        <div>
          <input
            type="radio"
            value="option1"
            onChange={handleOptionChange}
            style={{ marginRight: "5px" }}
          />
          <label>
            비밀글 작성
          </label>
        </div>

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
