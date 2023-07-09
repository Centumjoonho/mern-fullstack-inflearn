import { React, useState, useEffect } from "react";
import { UploadButtonDiv, UploadDiv, UploadForm } from "../../Style/UploadCSS.js";
import { useNavigate, useParams, Link } from "react-router-dom";

import axios from 'axios';


function Edit() {

    // 경로 상 존재하는 postNum 변수 값(string)
    let params = useParams();

    const [PostInfo, setPostInfo] = useState({});

    const [Flag, setFlag] = useState(false);

    const [Title, setTitle] = useState("");
    const [Content, setContent] = useState("");
    const navigate = useNavigate();


    useEffect(() => {

        let body = {
            postNum: params.postNum,
        }

        axios.post("/api/post/detail", body)
            .then(response => {

                if (response.data.success === true) {
                    setPostInfo(response.data.post);
                    setFlag(true);
                }

            })
            .catch((err) => {
                console.log(err);
            })

    }, []);

    useEffect(() => {

        setTitle(PostInfo.title);
        setContent(PostInfo.content)

    }, [PostInfo])


    const onSubmit = (e) => {

        e.preventDefault();

        if (Title === "" || Content === "") {
            return alert("Please fill out All");
        }
        // body 집어넣는 변수는 db 칼럼 명과 맞춰야한다 
        let body = {
            title: Title,
            content: Content,
            postNum: params.postNum
        };

        axios.post("/api/post/edit", body).then((response) => {
            if (response.data.success) {
                alert("글 수정이 완료 되었습니다.")
                navigate(`/post/${PostInfo.postNum}`);
            }
            else {
                alert("글 수정이 실패 되었습니다.")
            }
        }).catch((err) => {
            console.log(err);
        })

    };





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
                        }}>수정</button>

                </UploadButtonDiv>
            </UploadForm>
        </UploadDiv>
    )
}

export default Edit