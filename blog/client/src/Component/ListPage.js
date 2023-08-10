import React, { useState, useEffect } from 'react'
import axios from 'axios';
import List from './Post/List';

const ListPage = () => {

    const [PostList, setPostList] = useState([]);

    useEffect(() => {

        // if (user.accessToken) {
        // 지정된 ID를 가진 유저에 대한 요청
        axios.post('/api/post/list').then((response) => {
            // 성공 핸들링

            if (response.data.success) {
                setPostList([...response.data.postList])

            }
        }).catch((err) => {
            console.log(err);
        });
    }, [])


    return (

        <div><List PostList={PostList} /></div>
    )
}

export default ListPage