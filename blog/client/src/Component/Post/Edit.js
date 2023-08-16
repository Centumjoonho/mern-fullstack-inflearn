import { React, useState, useEffect } from "react";
import {
    UploadButtonDiv,
    UploadDiv,
    UploadForm,
} from "../../Style/UploadCSS.js";
import { useNavigate, useParams } from "react-router-dom";
import ImageUpload from "./ImageUpload.js";

import axios from "axios";
import Download from "./Download.js"; // 추가

function Edit() {
    // 경로 상 존재하는 postNum 변수 값(string)
    let params = useParams();

    const [PostInfo, setPostInfo] = useState({});

    const [Title, setTitle] = useState("");

    const [Content, setContent] = useState("");

    const [Image, setImage] = useState("");

    const [Secret_Check, setSecret_Check] = useState(null);

    const navigate = useNavigate();

    // 수정된 부분: ImageDownloadLink 컴포넌트를 위한 상태 추가
    const [ImageDownloadLink, setImageDownloadLink] = useState(null);

    useEffect(() => {
        let body = {
            postNum: params.postNum,
        };

        axios
            .post("/api/post/detail", body)
            .then((response) => {
                if (response.data.success === true) {
                    setPostInfo(response.data.post);
                    console.log(PostInfo)
                    setImageDownloadLink(response.data.post.image);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {

        setTitle(PostInfo.title);
        setContent(PostInfo.content);
        setImage(PostInfo.image);
        setSecret_Check(PostInfo.secret);


    }, [PostInfo]);

    const handleOptionChange = (value) => {

        if (value === "비밀글") {
            setSecret_Check(true);
        }
        else {
            setSecret_Check(false);
        }

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
            postNum: params.postNum,
            image: Image,
            secret: Secret_Check,
        };

        axios
            .post("/api/post/edit", body)
            .then((response) => {
                if (response.data.success) {
                    alert("글 수정이 완료 되었습니다.");
                    navigate(`/post/${PostInfo.postNum}`);
                } else {
                    alert("글 수정이 실패 되었습니다.");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <UploadDiv>
            <UploadForm>
                <h3>Upload</h3>
                <label>제목</label>
                <input
                    id="title"
                    type="text"
                    value={Title || ""}
                    onChange={(e) => {
                        setTitle(e.currentTarget.value);
                    }}
                />

                <ImageUpload setImage={setImage}></ImageUpload>

                {/* 이미지 다운로드 링크를 표시합니다. */}
                {ImageDownloadLink && (
                    <Download filePath={ImageDownloadLink} />
                )}
                <div className="secret_radio">
                    <div style={{ margin: "5px" }}>
                        <input
                            type="radio"
                            name="secret"
                            value="비밀글"
                            checked={Secret_Check === true}
                            onChange={(e) => handleOptionChange(e.currentTarget.value)}
                            style={{ marginRight: "5px" }}
                        />
                        <label>
                            비밀글
                        </label>
                    </div>

                    <div style={{ margin: "5px" }}>
                        <input
                            type="radio"
                            name="secret"
                            value="공개글"
                            checked={Secret_Check === false}
                            onChange={(e) => handleOptionChange(e.currentTarget.value)}
                            style={{ marginRight: "5px" }}
                        />
                        <label>
                            공개글
                        </label>
                    </div>
                </div>

                <label>내용</label>

                <textarea
                    id="content"
                    type="text"
                    value={Content || ""}
                    onChange={(e) => {
                        setContent(e.currentTarget.value);
                    }}
                />

                <UploadButtonDiv>
                    <button
                        onClick={(e) => {
                            onSubmit(e);
                        }}
                    >
                        수정
                    </button>

                    <button
                        className="cancel"
                        onClick={(e) => {
                            e.preventDefault();

                            navigate(-1);
                        }}
                    >
                        취소
                    </button>
                </UploadButtonDiv>
            </UploadForm>
        </UploadDiv>
    );
}

export default Edit;
