import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => (
    <div id="contact" className="bg-dark text-white py-5">
        <Container>
            <h2>Contact Me</h2>
            <Form>
                <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
            </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
            Send Message
            </Button>
            </Form>
        </Container>
    </div>
    );
    export default Contact;