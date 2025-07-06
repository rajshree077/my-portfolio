import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => (
    <div id="skills" className="bg-light py-5">
        <Container>
            <h2>Skills</h2>
            <Row>
                <Col md={6}>
                <h5>HTML</h5>
                <ProgressBar now={95} label="95%" />
                <h5 className="mt-3">CSS</h5>
                <ProgressBar now={90} label="90%" />
                <h5 className="mt-3">Bootstrap</h5>
                <ProgressBar now={80} label="80%" />
                </Col>
                <Col md={6}>
                <h5>JavaScript</h5>
                <ProgressBar now={75} label="75%" />
                <h5 className="mt-3">React</h5>
                <ProgressBar now={80} label="80%" />
                <h5 className="mt-3">Git & GitHub</h5>
                <ProgressBar now={60} label="60%" />
                </Col>
            </Row>
        </Container>
    </div>
);

export default Skills;