import { React, useState, useEffect } from 'react'
import axios from "axios"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ListDiv, ListItem } from '../../Style/LIstCSS'



const List = (props) => {
    const [PostList, setPostList] = useState([]);
    useEffect(() => {

        // 지정된 ID를 가진 유저에 대한 요청
        axios.post('/api/post/list').then((response) => {
            // 성공 핸들링
            console.log(response.data);

            console.log(response.data.postList);

            if (response.data.success) {
                setPostList([...response.data.postList])

            }


        }).catch((err) => {
            console.log(err);
        });
    }, [])


    return (
        <>

            <ListDiv>
                <h2 > 게시판 목록 </h2>

                {PostList.map((post, index) => {
                    return (
                        <ListItem key={index}>
                            <Link to={`/post/${post.postNum}`}>
                                <p className='title'> {post.title}</p>
                                <p> {post.content}</p>
                            </Link>
                        </ListItem>
                    )
                })}
                <Button>UPLAOD</Button>
            </ListDiv>

        </>

    )
}

export default List;