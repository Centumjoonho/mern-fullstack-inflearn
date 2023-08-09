import React, { useState } from 'react'
import { RepleContentDiv, RepleEditDiv } from '../../Style/RepleCSS'
import { useClickAway } from "@uidotdev/usehooks";
import { useSelector } from 'react-redux';
import { BsThreeDots } from 'react-icons/bs';
import axios from 'axios';

const RepleContent = (props) => {


    const [Reple, setReple] = useState(props.repleList.reple)

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (!Reple) {
            return alert("댓글 내용을 입력하세요");
        }

        let body = {
            reple: Reple,
            uid: user.uid,
            postId: props.repleList.postId,
            repleId: props.repleList._id,
        }
        axios.post('/api/reple/edit', body).then((response) => {
            if (response.data.success) {
                alert("댓글 수정이 성공하였습니다.")
            }
            else {
                alert("댓글 수정이 실패하였습니다.")
            }
            return window.location.reload();
        })

    }

    const DeleteHandler = (e) => {
        e.preventDefault()

        if (window.confirm('정말로 댓글을 삭제하시겠습니까?')) {

            let body = {
                repleId: props.repleList._id,
                postId: props.repleList.postId,
            };
            axios.post('/api/reple/delete', body).then((response) => {
                if (response.data.success) {
                    alert('댓글이 삭제되었습니다.')
                    window.location.reload();
                }
            }).catch((err) => {
                alert('댓글 삭제에 실패하였습니다.');
            });

        }
    }

    const user = useSelector(state => state.user);
    const [EditFlag, setEditFlag] = useState(false)
    const [isOpen, setIsOpen] = React.useState(false);
    const ref = useClickAway(() => {
        setIsOpen(false);
    });

    const handleOpenModal = () => {
        if (isOpen === false) {
            setIsOpen(true);
        }
    };
    // const [ModalFlag, setModalFlag] = useState(false);

    return (
        <div>
            <RepleContentDiv key={props.idx}>
                <div className='author'>
                    <p>{props.repleList.author.displayName}</p>
                    {props.repleList.author.uid === user.uid && (
                        <div className='modalControl'>
                            <span onClick={handleOpenModal}><BsThreeDots /></span>
                            {isOpen && (
                                <div className='modalDiv' ref={ref}>
                                    <p onClick={() => { setEditFlag(true); setIsOpen(false); }}>수정</p>
                                    <p className='delete' onClick={(e) => { DeleteHandler(e) }}>삭제</p>
                                </div>
                            )}

                        </div>
                    )}

                </div>
                {EditFlag ?
                    <RepleEditDiv>
                        <form>
                            <input type='text' value={Reple} onChange={(e) => { setReple(e.target.value) }} />

                            <button className='edit' onClick={(e) => { SubmitHandler(e) }}>수정</button>
                            <button onClick={(e) => {
                                e.preventDefault();

                            }}>취소</button>
                        </form>
                    </RepleEditDiv> : <p>{props.repleList.reple}</p>}

            </RepleContentDiv></div>
    )
}

export default RepleContent