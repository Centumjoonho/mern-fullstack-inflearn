import React from 'react'
import RepleUpload from './RepleUpload'
import RepleList from './RepleList'
import { RepleAreaDiv } from '../../Style/RepleCSS'

import { useSelector } from 'react-redux'

const RepleArea = (props) => {

    const user = useSelector(state => state.user);

    return (
        <RepleAreaDiv>
            {user.accessToken && <RepleUpload postId={props.postId} />}

            <RepleList postId={props.postId} />
        </RepleAreaDiv>
    )
}

export default RepleArea