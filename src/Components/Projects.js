import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: 'Weather App',
    description: 'A weather forecast app using OpenWeather API and React hooks.',
    tech: 'React, API, CSS',
    image: 'https://via.placeholder.com/300x200',
    live: 'https://weather-rajshree.netlify.app',
    github: 'https://github.com/rajshree/weather-app'
  },{
    title: 'To-Do App',
    description: 'A simple to-do list app with local storage support.',
    tech: 'React, Bootstrap',
    image: 'https://via.placeholder.com/300x200',
    live: 'https://rajshree-todo.netlify.app',
    github: 'https://github.com/rajshree/todo-app'
  }
];
const Projects = () => (
<div id="projects" className="py-5">
    <Container>
      <h2>Projects</h2>
      <Row>
        {projects.map((proj, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card>
              <Card.Img variant="top" src={proj.image} />
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.description}</Card.Text>
                <Card.Text><strong>Tech:</strong> {proj.tech}</Card.Text>
                <Button variant="primary" href={proj.live} target="_blank" className="me-2">Live</Button>
                <Button variant="secondary" href={proj.github} target="_blank">Code</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default Projects;