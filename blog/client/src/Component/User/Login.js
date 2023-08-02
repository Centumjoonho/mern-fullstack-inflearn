import { React, useState } from 'react'
import LoginDiv from '../../Style/UserCSS'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    let navigate = useNavigate();

    return (
        <LoginDiv>
            <form>
                <label>E-mail</label>
                <input type='email' value={Email} onChange={(e) => { setEmail(e.currentTarget.value) }}></input>
                <label>Password</label>
                <input type='password' value={Password} onChange={(e) => { setPassword(e.currentTarget.value) }}></input>
                <button>로그인</button>
                <button onClick={(e) => {
                    e.preventDefault();
                    navigate('/register')
                }}>회원가입</button>
            </form>

        </LoginDiv>
    )
}

export default Login