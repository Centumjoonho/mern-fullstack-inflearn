import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import { PostDiv, Post, BtnDiv } from "../../Style/PostDetailCSS";
import { useSelector } from "react-redux";
import Avatar from 'react-avatar';

function Detail(props) {
    // 경로 상 존재하는 postNum 변수 값(string)
    let params = useParams();

    const user = useSelector(state => state.user);

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
    useEffect(() => {

        console.log(props.PostInfo)

    }, [])


    return (
        <PostDiv>

            <>
                <Post>
                    <h2>{props.PostInfo.title}</h2>
                    <div className="author">
                        <Avatar size="30" round={true} src={props.PostInfo.author.photoURL} />
                        {props.PostInfo.author.displayName}
                    </div>
                    {props.PostInfo.image ? (
                        <img
                            src={props.PostInfo.image}
                            alt="upload_image"
                        />
                    ) : null}
                    <p>{props.PostInfo.content}</p>

                </Post>
                {user.accessToken ? (
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
