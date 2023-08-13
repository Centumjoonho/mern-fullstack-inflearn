import React, { useState, useEffect } from 'react'
import axios from 'axios';
import List from './Post/List';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { GNBDiv, ListPageDiv, ListPageButton } from '../Style/LIstPageCSS'
import { BiSearch } from 'react-icons/bi';

const ListPage = () => {

    const [PostList, setPostList] = useState([]);
    const [Sort, setSort] = useState("최신순");
    const [SearchTerm, setSearchTerm] = useState("");
    const [Skip, setSkip] = useState(0);
    const [LoadMore, setLoadMore] = useState(true)

    const getPostLoadMore = () => {

        let body = {
            sort: Sort,
            searchTerm: SearchTerm,
            skip: Skip,
        }
        // if (user.accessToken) {
        // 지정된 ID를 가진 유저에 대한 요청
        axios.post('/api/post/list', body).then((response) => {
            // 성공 핸들링

            if (response.data.success) {
                setPostList([...PostList, ...response.data.postList]);
                setSkip(Skip + response.data.postList.length);
                if (response.data.postList.length < 5) {
                    setLoadMore(false);
                }
            }
            console.log(PostList)
        }).catch((err) => {
            console.log(err);
        });

    };

    const getPostList = () => {

        setSkip(0);

        let body = {
            sort: Sort,
            searchTerm: SearchTerm,
            skip: 0,
        }
        // if (user.accessToken) {
        // 지정된 ID를 가진 유저에 대한 요청
        axios.post('/api/post/list', body).then((response) => {
            // 성공 핸들링

            if (response.data.success) {
                setPostList([...response.data.postList]);
                setSkip(response.data.postList.length);
                if (response.data.postList.length < 5) {
                    setLoadMore(false);
                }
            }
            console.log(PostList)
        }).catch((err) => {
            console.log(err);
        });

    }

    useEffect(() => {
        getPostList();
    }, [Sort])

    const SearchHandler = () => {

        getPostList();
    }



    return (

        <div>
            <GNBDiv>
                <DropdownButton id="dropdown-button-dark-example2"
                    variant="secondary"
                    title={Sort}
                    className="mt-2"
                    data-bs-theme="dark">

                    <Dropdown.Item onClick={() => { setSort("최신순") }}>최신순</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setSort("인기순") }}>인기순</Dropdown.Item>
                </DropdownButton>
                <div className="search">
                    <input
                        type='text'
                        value={SearchTerm}
                        onChange={(e) => { setSearchTerm(e.currentTarget.value) }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                SearchHandler();
                            }
                        }}
                    />

                    <button onClick={() => { SearchHandler() }}>
                        <BiSearch />
                    </button>
                </div>

            </GNBDiv>

            <List PostList={PostList} />
            {LoadMore && (
                <ListPageDiv>
                    <ListPageButton onClick={getPostLoadMore} >ADD MORE</ListPageButton>
                </ListPageDiv>)}


        </div>
    )
}

export default ListPage