import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Card className="text-center mt-4">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>
                    <h1><span>HELLO I'M,</span> <br /> ABU BAKKAR SIDDIQUE</h1>
                </Card.Title>
                <Card.Text>
                    <h5>I am a Web Developer</h5>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card >
    );
};

export default Header;