import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";

function ContactForm() {
    return (
        <Container
            fluid
            className="vh-100 py-5 bg-light d-flex justify-content-center align-items-center"
        >
            <Container>
                <Row>
                    <Col>
                        <h1>Get in Touch</h1>
                        <p>
                            Incididunt dolore commodo qui pariatur incididunt et
                            nisi fugiat laborum ut cupidatat nulla eu commodo.
                        </p>
                        <Form>
                            <Form.Group>
                                <Form.Label className="mt-2">
                                    <h5>Name</h5>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="John Doe"
                                ></Form.Control>
                                <Form.Label className="mt-2">
                                    <h5>Email</h5>
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="email@domain.com"
                                ></Form.Control>
                                <Form.Label className="mt-2">
                                    <h5>Message</h5>
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Message"
                                ></Form.Control>
                                <Button type="submit" className="w-100 my-3">
                                    Send
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col className="d-flex flex-column bg-dark text-light p-5 rounded-5 justify-content-between">
                        <h1>Info</h1>
                        <h5>geraldkevinjove@gmail.com</h5>
                        <h5>(+63)966-331-0965</h5>
                        <h5>Caloocan, Philippines</h5>
                        <h5>09:00 AM - 07:00 PM (PH Time)</h5>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ContactForm;
