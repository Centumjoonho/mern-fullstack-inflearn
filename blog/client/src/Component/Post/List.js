import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ListDiv, ListItem, ListButton, ListLink } from '../../Style/LIstCSS'
import Avatar from 'react-avatar';
import moment from 'moment'
import 'moment/locale/ko'
import { useNavigate } from 'react-router-dom';

const List = (props) => {
    // const user = useSelector(state => state.user)
    const setTime = (createAt, updateAt) => {
        if (createAt !== updateAt) {

            return <p className='moment'>{moment(updateAt).format('YYYY년 MMMM Do a hh:mm  (수정됨)')}</p>
        }
        else {
            return <p className='moment'>{moment(createAt).format('YYYY년 MMMM Do a hh:mm ')}</p>
        }
    }
    const navigate = useNavigate();


    return (
        <>

            <ListDiv>
                <div className='title_upload'>
                    <h2 > 게시판 목록 </h2>
                    <ListButton onClick={() => { navigate('/upload') }}>UPLOAD</ListButton>
                </div>

                {props.PostList.map((post, index) => {
                    return (
                        <ListItem key={index}>
                            <Link to={`/post/${post.postNum}`}>
                                <p className='title'> {post.title}</p>
                                <div className="author">
                                    <Avatar size="40" round={true} src={post.author.photoURL} style={{ border: "0.5px solid black" }} />
                                    <p style={{ margin: "5px" }}>{post.author.displayName}</p>
                                </div>

                                <p className='content'> {post.content}</p>
                                {setTime(post.createdAt, post.updatedAt)}
                            </Link>
                        </ListItem>
                    )
                })}


            </ListDiv>

        </>

    )
}

export default List;