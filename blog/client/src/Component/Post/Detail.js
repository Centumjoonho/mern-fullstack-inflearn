import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, React, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { Post, PostDiv, SpinnerDiv, BtnDiv } from "../../Style/PostDetailCSS";

function Detail() {
    // 경로 상 존재하는 postNum 변수 값(string)
    let params = useParams();

    const [PostInfo, setPostInfo] = useState({});

    const [Flag, setFlag] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        let body = {
            postNum: params.postNum,
        };

        axios
            .post("/api/post/detail", body)
            .then((response) => {
                if (response.data.success === true) {

                    setPostInfo(response.data.post);
                    setFlag(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });

    }, [params.postNum]);

    useEffect(() => {

        console.log("PostInfo" + PostInfo);

    }, [PostInfo]);

    const DeleteHandler = () => {
        if (window.confirm("Are you sure you want to delete ?")) {
            let body = {
                postNum: params.postNum,
            };

            axios
                .post("/api/post/delete", body)
                .then((response) => {
                    if (response.data.success === true) {
                        alert("게시글 삭제를 완료하였습니다");
                        navigate("/");
                    }
                })
                .catch((err) => {
                    console.log(err);
                    alert("게시글 삭제를 실패하였습니다");
                });
        }
    };

    return (
        <PostDiv>
            {Flag ? (
                <>
                    <Post>
                        <h1>{PostInfo.title}</h1>
                        {PostInfo.image ? (
                            <img
                                src={`http://localhost:5000/${PostInfo.image}`}
                                alt="upload_image"
                            />
                        ) : null}
                        <p>{PostInfo.content}</p>
                    </Post>

                    <BtnDiv>
                        <Link to={`/edit/${PostInfo.postNum}`}>
                            <button className="edit"> 수정</button>
                        </Link>

                        <button
                            className="delete"
                            onClick={() => {
                                DeleteHandler();
                            }}
                        >
                            {" "}
                            삭제
                        </button>
                    </BtnDiv>
                </>
            ) : (
                <SpinnerDiv>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden"> Loading... </span>
                    </Spinner>
                </SpinnerDiv>
            )}
        </PostDiv>
    );
}

export default Detail;
