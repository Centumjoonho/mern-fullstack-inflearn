import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios';


const RepleUpload = (props) => {

    const [Reple, setReple] = useState("")
    const user = useSelector(state => state.user);

    const SubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            reple: Reple,
            uid: user.uid,
            postId: props.postId
        }
        axios.post('/api/reple/submit', body).then((response) => {

        })

    }

    return (
        <div>
            <form>
                <input type='text' value={Reple} onChange={(e) => { setReple(e.target.value) }} />
                <button onClick={(e) => { SubmitHandler(e) }}>등록</button>

            </form>
        </div>
    )
}

export default RepleUpload