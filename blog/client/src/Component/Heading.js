import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Heading = () => {
    return (

        <Navbar expand="lg" bg='dark' variant='dark'  >
            <Container>
                <Navbar.Brand href="#home">Centum Joonho</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>HOME</Link>


                        <Link to="/upload" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>UPLOAD</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Heading