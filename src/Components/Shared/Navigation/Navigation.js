import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <>
            <Navbar className="navbar navbar-expand-lg fixed-top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ABU BAKKAR</Navbar.Brand>
                    <Nav className="">
                        <Nav.Link as={HashLink} to="/home#home"><Button variant="dark">Home</Button></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#aboutMe"><Button variant="dark">About me</Button></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#projects"><Button variant="dark">Projects</Button></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contactMe"><Button variant="dark">Contact me</Button></Nav.Link>
                        <Nav.Link href="https://drive.google.com/file/d/1nWFFKOZ5TiEIJv-F2hlqmWbCe7tVSWK6/view?usp=sharing" target="_blank"><Button variant="primary">Resume</Button></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;