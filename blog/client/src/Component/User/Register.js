import { React, useState } from 'react'
import LoginDiv from '../../Style/UserCSS'

const Register = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Password2, setPassword2] = useState("");


    return (
        <LoginDiv>
            <form>
                <label>Name</label>
                <input type='name' value={Name} onChange={(e) => { setName(e.currentTarget.value) }}></input>
                <label>E-mail</label>
                <input type='email' value={Email} onChange={(e) => { setEmail(e.currentTarget.value) }}></input>
                <label>Password</label>
                <input type='password' value={Password} onChange={(e) => { setPassword(e.currentTarget.value) }}></input>
                <label>Password-Check</label>
                <input type='password' value={Password2} onChange={(e) => { setPassword2(e.currentTarget.value) }}></input>
                <button>회원가입</button>
            </form>

        </LoginDiv>
    )
}

export default Register