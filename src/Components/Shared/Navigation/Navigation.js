import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar className="navbar navbar-expand-lg fixed-top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">ABU BAKKAR</Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="/home"><Button variant="dark">Home</Button></Nav.Link>
                        <Nav.Link href="#about"><Button variant="dark">About me</Button></Nav.Link>
                        <Nav.Link href="#project"><Button variant="dark">Projects</Button></Nav.Link>
                        <Nav.Link href="#contact"><Button variant="dark">Contact me</Button></Nav.Link>
                        <Nav.Link href="https://drive.google.com/file/d/1nWFFKOZ5TiEIJv-F2hlqmWbCe7tVSWK6/view?usp=sharing" target="_blank"><Button variant="primary">Resume</Button></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;