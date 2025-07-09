import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profileimage from "./profile.jpeg"; 
const About = () => (
    <div id="about" className="py-5">
        <Container>
            <h2>About Me</h2>
            <Row>
                <Col md={6}>
                <p>
                    I’m a frontend web developer. I love making websites that work smoothly and look great on all devices using React,Bootstrap and CSS.
                I turn ideas into fun, interactive web apps.
            </p>
            </Col>
            <Col md={6}>
            <img
                src={profileimage}
                className="img-fluid rounded"
                alt="Rajshree"
             />
            </Col>
            </Row>
        </Container>
    </div>
);

export default About;
