import { useParams, Link, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { PostDiv, Post, BtnDiv } from "../../Style/PostDetailCSS";

function Detail(props) {
    // 경로 상 존재하는 postNum 변수 값(string)
    let params = useParams();

    const navigate = useNavigate();

    const DeleteHandler = () => {
        if (window.confirm("정말 해당 내용을 삭제하시겠습니까")) {
            let body = {
                postNum: params.postNum,
            };

            axios
                .post("/api/post/delete", body)
                .then((response) => {
                    if (response.data.success === true) {
                        alert("게시글 삭제를 완료하였습니다");
                        navigate("/list");
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

            <>
                <Post>
                    <h1>{props.PostInfo.title}</h1>

                    {props.PostInfo.image ? (
                        <img
                            src={props.PostInfo.image}
                            alt="upload_image"
                        />
                    ) : null}
                    <p>{props.PostInfo.content}</p>
                    <p>작성자  {props.PostInfo.author.displayName}</p>
                </Post>
                {props.Author ? (
                    <BtnDiv>
                        <Link to={`/edit/${props.PostInfo.postNum}`}>
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
                    </BtnDiv>) : (<BtnDiv><button onClick={() => { navigate("/login"); }}>로그인</button></BtnDiv>)}

            </>

        </PostDiv>
    );
}

export default Detail;
