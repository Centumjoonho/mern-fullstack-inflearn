import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RepleListDiv } from '../../Style/RepleCSS'
import RepleContent from '../Reple/RepleContent'

const RepleList = (props) => {

    const [RepleList, setRepleList] = useState([]);

    useEffect(() => {

        let body = {
            postId: props.postId,
        }

        axios.post('/api/reple/reples', body).then((response) => {

            if (response.data.success) {
                const repleList = response.data.repleList
                setRepleList([...repleList]);
            }
        })

    }, [])

    return (
        <RepleListDiv>
            {RepleList.map((repleList, idx) => {
                return (
                    <RepleContent repleList={repleList} idx={idx} />
                );
            })}
        </RepleListDiv>
    )
}

export default RepleList