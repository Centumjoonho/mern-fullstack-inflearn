import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import firebase from './../firebase';
import { useNavigate } from 'react-router-dom';



const Heading = () => {
    const navigate = useNavigate();
    const LogoutHandler = () => {
        firebase.auth().signOut();
        navigate('/');
        alert('정상적으로 로그아웃이 되었습니다.')
    }
    // const dispatch=useDispatch();
    const user = useSelector((state) => state.user);


    return (

        <Navbar expand="lg" bg='dark' variant='dark'  >
            <Container>
                <Navbar.Brand href="/">Centum Joonho</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>HOME</Link>

                        <Link to="/list" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>LIST</Link>

                        <Link to="/upload" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>UPLOAD</Link>



                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className='justify-content-end'>

                    {user.accessToken ? (
                        <Navbar.Text
                            style={{ color: "white", cursor: "pointer", textDecoration: "none", marginRight: "10px" }}
                            onClick={() => { LogoutHandler() }}>
                            <span style={{ marginRight: "20px", fontWeight: "bold", fontSize: "1.2rem", color: "yellowgreen" }}>{user.displayName}</span>
                            LOGOUT</Navbar.Text>
                    ) : (
                        <Link to="/login" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>
                            LOGIN</Link>
                    )}


                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Heading