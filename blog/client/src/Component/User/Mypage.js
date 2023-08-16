import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Avatar from 'react-avatar'
import axios from 'axios'
import { RxUpdate } from 'react-icons/rx'
import firebase from '../../firebase'


const Mypage = () => {

    const [CurrentImage, setCurrentImage] = useState("");
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userProfile = firebase.auth().currentUser;


    useEffect(() => {

        // userSelector 에서 값을 가져오는데는 걸리는 시간이 있다.
        console.log(user.isLoading)
        if (user.isLoading && !user.accessToken) {
            navigate("/login");
        } else {
            setCurrentImage(user.photoURL)
        }

    }, [user]);

    const ImageUpload = (e) => {

        const formData = new FormData();

        formData.append("file", e.target.files[0]);

        for (const key of formData) console.log(key);

        axios.post('/api/user/image/profile', formData).then((response) => {
            // console.log(response.data.filePath);
            if (response.data.success) {
                setCurrentImage(response.data.filePath);
            }

        }).catch((err) => {
            console.log(err);
        });

    }

    const Saveprofile = async (e) => {
        e.preventDefault();
        try {
            await userProfile.updateProfile({
                photoURL: CurrentImage,

            });
        } catch (error) {
            return alert(error, "프로필 이미지 저장에 실패하였습니다.")
        }
        let body = {
            photoURL: CurrentImage,
            uid: user.uid,
        }
        axios.post('/api/user/image/profile/update', body).then((response) => {
            if (response.data.success) {
                alert("프로필 저장에 성공하였습니다.");
                window.location.reload();
            }
            else {
                return alert("프로필 이미지 저장에 실패하였습니다.")
            }
        })

    }


    return (
        <>
            <div style={{ width: "100vw", height: "100vh" }}>
                <form style={{
                    width: "50%",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "2rem,"
                }}>
                    <label>
                        <input type='file' accept='image/*' style={{ display: "none" }} onChange={(e) => { ImageUpload(e) }} />
                        <Avatar size="100" round={true} src={CurrentImage} style={{ border: "1px solid black", cursor: "pointer" }} />
                    </label>
                    <RxUpdate onClick={(e) => { Saveprofile(e) }} style={{ fontSize: "2rem" }} />

                </form>
            </div>



        </>

    )
}

export default Mypage