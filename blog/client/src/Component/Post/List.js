import { React } from 'react'
import { Link } from 'react-router-dom';
import { ListDiv, ListItem, ListButton, ListLink } from '../../Style/LIstCSS'
import Avatar from 'react-avatar';
import moment from 'moment'
import 'moment/locale/ko'


const List = (props) => {
    // const user = useSelector(state => state.user)

    return (
        <>

            <ListDiv>
                <h2 > 게시판 목록 </h2>

                {props.PostList.map((post, index) => {
                    return (
                        <ListItem key={index}>
                            <Link to={`/post/${post.postNum}`}>
                                <p className='title'> {post.title}</p>
                                <div className="author">
                                    <Avatar size="25" round={true} src={post.author.photoURL} style={{ border: "0.5px solid black" }} />
                                    <p style={{ margin: "5px" }}>{post.author.displayName}</p>
                                </div>

                                <p className='content'> {post.content}</p>
                                <p>{moment(post.createdAt).format('YYYY년 MMMM Do , hh:mm:ss ')}</p>
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