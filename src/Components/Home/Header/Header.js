import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Card className="text-center mt-5 p-5">
            <Card.Body>
                <Card.Title>
                    <h1><span>HELLO I'M,</span> <br /> ABU BAKKAR SIDDIQUE</h1>
                </Card.Title>
                <Card.Text>
                    <h4>I am a Frontend Developer</h4>
                </Card.Text>
                <a href="https://www.linkedin.com/in/abu-bakkar-siddique-007752181/" target="blank"><FaLinkedin style={{ width: '50px', height: '40px' }} /></a>
                <a href="https://github.com/Polash9000" target="blank"><FaGithubSquare style={{ width: '50px', height: '40px' }} /></a>
                <br /> <br />
                <a href="https://drive.google.com/file/d/1nWFFKOZ5TiEIJv-F2hlqmWbCe7tVSWK6/view?usp=sharing" target="blank"><Button variant="primary">Download Resume</Button></a>
            </Card.Body>
        </Card >
    );
};

export default Header;