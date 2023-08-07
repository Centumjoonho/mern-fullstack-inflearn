import { useState, useEffect } from "react";
import React from 'react';
import axios from "axios";
import Detail from "./Detail";
import { Spinner } from "react-bootstrap";
import { SpinnerDiv } from "../../Style/PostDetailCSS";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RepleArea from "../Reple/RepleArea";

const PostArea = () => {
    let params = useParams();

    const [PostInfo, setPostInfo] = useState({});
    const [Flag, setFlag] = useState(false);
    const user = useSelector((state) => state.user);
    const [Author, setAuthor] = useState(false);

    useEffect(() => {
        let body = {
            postNum: params.postNum,
        };

        axios
            .post("/api/post/detail", body)
            .then((response) => {
                if (response.data.success) {
                    const user_uid = response.data.post.author.uid
                    setPostInfo(response.data.post);
                    setFlag(true);
                    if (user_uid === user.uid) {
                        setAuthor(true)
                    }
                    else {
                        setAuthor(false)
                    }

                }
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    useEffect(() => {

    }, [PostInfo]);



    return (
        <div>
            {Flag ? (
                <>
                    <Detail PostInfo={PostInfo} Author={Author} />
                    <RepleArea postId={PostInfo._id} />
                </>
            ) : (
                <SpinnerDiv>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden"> Loading... </span>
                    </Spinner>
                </SpinnerDiv>
            )}

        </div>
    )
}

export default PostArea