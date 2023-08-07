import { React, useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { ListDiv, ListItem, ListButton, ListLink } from '../../Style/LIstCSS'
import { useSelector } from 'react-redux';





const List = (props) => {
    // const user = useSelector(state => state.user)

    const [PostList, setPostList] = useState([]);
    useEffect(() => {

        // if (user.accessToken) {
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

        // }


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
                                <p className='author'> {post.author.displayName}</p>
                                <p className='content'> {post.content}</p>
                            </Link>
                        </ListItem>
                    )
                })}
                <ListButton><ListLink to={`/upload`} >UPLOAD</ListLink></ListButton>

            </ListDiv>

        </>

    )
}

export default List;