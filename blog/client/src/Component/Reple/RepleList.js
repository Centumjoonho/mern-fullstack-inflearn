import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
        <div>
            {RepleList.map((repleList, idx) => {
                return <div key={idx}>{repleList.reple}</div>;
            })}
        </div>
    )
}

export default RepleList