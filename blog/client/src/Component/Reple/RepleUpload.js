import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { RepleUploadDiv } from '../../Style/RepleCSS'


const RepleUpload = (props) => {

    const [Reple, setReple] = useState("")
    const user = useSelector(state => state.user);

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (!Reple) {
            return alert("댓글 내용을 입력하세요");
        }

        let body = {
            reple: Reple,
            uid: user.uid,
            postId: props.postId
        }
        axios.post('/api/reple/submit', body).then((response) => {
            if (response.data.success) {
                alert("댓글 작성이 성공하였습니다.")
                window.location.reload();
            }
            else {
                alert("댓글 작성이 성공하였습니다.")
            }
        })

    }

    return (
        <RepleUploadDiv>
            <form>
                <input type='text' value={Reple} onChange={(e) => { setReple(e.target.value) }} />
                <button onClick={(e) => { SubmitHandler(e) }}>등록</button>

            </form>
        </RepleUploadDiv>
    )
}

export default RepleUpload