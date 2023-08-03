import { React, useState, useEffect } from 'react'
import LoginDiv from '../../Style/UserCSS'
import { useNavigate } from 'react-router-dom';

import firebase from '../../firebase';

const Login = () => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ErrorMsg, setErrorMsg] = useState("")


    useEffect(() => {
        setTimeout(() => {
            setErrorMsg("");
        }, 3000);
    }, [ErrorMsg])



    let navigate = useNavigate();

    const SignInFunc = async (e) => {
        e.preventDefault();


        if (!(Email && Password)) {
            return alert("개인 정보를 입력하세요.");
        }

        await firebase.auth().signInWithEmailAndPassword(Email, Password)
            .then((userCredential) => {

                var userName = userCredential.user.multiFactor.user.displayName;
                alert(`${userName}님 방문해 주셔서 감사합니다.`)
                // Signed in
                navigate("/list");
                // ...
            })
            .catch((error) => {

                if (error.code === "auth/user-not-found") {
                    setErrorMsg('존재하지 않는 이메일입니다.');
                } else if (error.code === "auth/wrong-password") {
                    setErrorMsg('비밀번호가 일치하지 않습니다.');
                }
                else {
                    setErrorMsg('로그인이 실패하였습니다.');
                }
            });

    }

    return (
        <LoginDiv>
            <form>
                <label>E-mail</label>
                <input type='email' value={Email} onChange={(e) => { setEmail(e.currentTarget.value) }}></input>
                <label>Password</label>
                <input type='password' minLength={6} value={Password} onChange={(e) => { setPassword(e.currentTarget.value) }}></input>
                <button onClick={(e) => { SignInFunc(e) }}>로그인</button>
                <button onClick={(e) => {
                    e.preventDefault();
                    navigate('/register')
                }}>회원가입</button>
                {ErrorMsg !== "" ? <span>{ErrorMsg}</span> : ""}
            </form>

        </LoginDiv>
    )
}

export default Login