import { useParams, Link } from 'react-router-dom'
import { useEffect, React, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { Post, PostDiv, SpinnerDiv, BtnDiv } from '../../Style/PostDetailCSS';


function Detail() {
    // 경로 상 존재하는 postNum 변수 값(string)
    let params = useParams();

    const [PostInfo, setPostInfo] = useState({});

    const [Flag, setFlag] = useState(false);

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

        console.log(params); // log the params to check if it's working correctly
    }, []);

    useEffect(() => {
        console.log(PostInfo);
    }, [PostInfo])


    return (
        <PostDiv>
            {Flag ? (
                <>
                    <Post>
                        <h1>{PostInfo.title}</h1>
                        <p>{PostInfo.content}</p>
                    </Post>

                    <BtnDiv>
                        <Link to={`/edit/${PostInfo.postNum}`}>
                            <button className='edit'> 수정</button>
                        </Link>

                        <button className='delete'> 삭제</button>
                    </BtnDiv>
                </>
            ) : (
                <SpinnerDiv>
                    <Spinner animation="border" role="status">
                        <span className='visually-hidden'> Loading... </span>
                    </Spinner>
                </SpinnerDiv>

            )}
        </PostDiv>
    );
}

export default Detail

