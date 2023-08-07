import { React, useState, useEffect } from 'react'
import { LoginDiv, NameDiv } from '../../Style/UserCSS'
import firebase from '../../firebase'

import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Password2, setPassword2] = useState("");
    //버튼 중복 클릭 방지
    const [Flag, setFlag] = useState(false);
    // 이름 중복 확인
    const [NameCheck, setNameCheck] = useState(false);
    // 닉네임 알람 
    const [NameInfo, setNameInfo] = useState("");


    const navigate = useNavigate();

    useEffect(() => {

        setNameInfo("");

    }, [NameCheck])


    //promise 형식 필요
    const RegisterFunc = async (e) => {
        e.preventDefault();
        setFlag(true);

        if (!(Name && Email && Password && Password2)) {
            return alert("모든 값을 채워주세요 ! ");
        }
        if (Password !== Password2) {
            return alert("비밀번호가 일치하는지 확인하세요 !");
        }
        if (!NameCheck) {
            return alert("이름 중복 검사를 진행해 주세요");
        }
        await firebase.auth().createUserWithEmailAndPassword(Email, Password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;

                user.updateProfile({
                    displayName: Name,
                })

                var email = user.multiFactor.user.email;

                var uid = user.multiFactor.user.uid;

                // ...
                let body = {
                    email: email,
                    displayName: Name,
                    uid: uid,
                }

                axios.post('/api/user/register', body).then((response) => {
                    setFlag(false);
                    if (response.data.success) {
                        //회원가입 성공시
                        alert("회원 가입을 축하드립니다.");

                        navigate('/login');

                    }
                    else {
                        //회원가입 실패시 
                        return alert('회원가입이 실패하였습니다.');
                    }
                });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                console.error(errorMessage);
                console.error(errorCode);
            });

    }

    const NameCheckFunc = (e) => {
        e.preventDefault();

        setNameInfo("");

        if (!Name) {
            return alert('닉네임을 입력해주세요');
        }

        let body = {
            displayName: Name,
        }

        axios.post('/api/user/name_check', body).then((response) => {
            if (response.data.success) {

                setNameCheck(response.data.check);
                if (!NameCheck) {

                    setNameInfo("이미 등록된 닉네임입니다.");

                }
                else {

                    setNameInfo("등록 가능한 닉네임입니다.")

                }
            }

        })

    }

    return (
        <LoginDiv>
            <form>

                <label>NickName</label>
                <div>
                    <input type='name' disabled={NameCheck} value={Name} onChange={(e) => { setName(e.currentTarget.value); }}></input>
                    <button className='check-double' onClick={(e) => { NameCheckFunc(e) }}>check</button>
                </div>
                {NameInfo !== "" ? <span>{NameInfo}</span> : ""}
                <label>E-mail</label>
                <input type='email' value={Email} onChange={(e) => { setEmail(e.currentTarget.value) }}></input>
                <label>Password</label>
                <input type='password' value={Password} minLength={6} onChange={(e) => { setPassword(e.currentTarget.value) }}></input>
                <label>Password-Check</label>
                <input type='password' value={Password2} minLength={6} onChange={(e) => { setPassword2(e.currentTarget.value) }}></input>
                <button disabled={Flag} onClick={(e) => { RegisterFunc(e) }}>회원가입</button>
            </form>

        </LoginDiv>
    )
}

export default Register