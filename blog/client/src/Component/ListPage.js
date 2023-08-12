import React, { useState, useEffect } from 'react'
import axios from 'axios';
import List from './Post/List';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const ListPage = () => {

    const [PostList, setPostList] = useState([]);
    const [Sort, setSort] = useState("최신순")

    useEffect(() => {
        let body = {
            sort: Sort,
        }
        // if (user.accessToken) {
        // 지정된 ID를 가진 유저에 대한 요청
        axios.post('/api/post/list', body).then((response) => {
            // 성공 핸들링

            if (response.data.success) {
                setPostList([...response.data.postList])

                console.log(PostList)

            }
        }).catch((err) => {
            console.log(err);
        });
    }, [Sort])


    return (

        <div>
            <DropdownButton id="dropdown-button-dark-example2"
                variant="secondary"
                title={Sort}
                className="mt-2"
                data-bs-theme="dark">

                <Dropdown.Item onClick={() => { setSort("최신순") }}>최신순</Dropdown.Item>
                <Dropdown.Item onClick={() => { setSort("인기순") }}>인기순</Dropdown.Item>
            </DropdownButton>
            <List PostList={PostList} />
        </div>
    )
}

export default ListPage