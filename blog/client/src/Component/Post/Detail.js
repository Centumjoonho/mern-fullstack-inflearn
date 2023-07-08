import { useParams } from 'react-router-dom'
import { useEffect, React, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';


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
        <>
            {Flag ?
                <>
                    <div>{PostInfo.title}</div>
                    <div>{PostInfo.content}</div>
                </> : <Spinner animation="grow" variant="success" />}


        </>

    )
}

export default Detail

