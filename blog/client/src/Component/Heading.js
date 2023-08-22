import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import firebase from './../firebase';
import { useNavigate } from 'react-router-dom';
import { LuSettings } from 'react-icons/lu';
import { BiDoorOpen } from 'react-icons/bi'


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
                <Navbar.Brand href="/" style={{ fontSize: "1.2rem" }}>Centum Joonho</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>HOME</Link>

                        <Link to="/list" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>LIST</Link>

                        <Link to="/upload" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>UPLOAD</Link>

                        <Link to="/map_page" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>MAP</Link>

                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className='justify-content-end'>

                    {user.accessToken ? (
                        <>
                            <Navbar.Text
                                style={{ color: "white", cursor: "pointer", textDecoration: "none", marginRight: "10px" }}
                                onClick={() => { LogoutHandler() }}>
                                <span style={{ marginRight: "20px", fontWeight: "bold", fontSize: "1.2rem", color: "yellowgreen" }}>{user.displayName}</span>
                                <span style={{ fontSize: "1.2rem" }}>LOGOUT</span>
                            </Navbar.Text>
                            <Navbar.Text
                                style={{ color: "white", cursor: "pointer", textDecoration: "none", marginRight: "10px", padding: "0" }}>
                                <Link to="/my_page">
                                    <LuSettings style={{ fontSize: "1.8rem", marginBottom: "5px" }} />
                                </Link>

                            </Navbar.Text>
                        </>



                    ) : (
                        <Link to="/login" style={{ color: "white", textDecoration: "none", padding: "0", marginRight: "10px" }}>
                            <BiDoorOpen style={{ fontSize: "1.5rem", marginBottom: "5px" }} /> <span style={{ fontSize: "1.2rem" }}>LOG IN</span></Link>
                    )}


                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Heading