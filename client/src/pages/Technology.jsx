import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "../ContactForm.css";

const technology = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add your own logic for sending the form data to a server, for example using Axios
    // ...

    if (name && email && message) {
      setShowSuccess(true);
      setShowError(false);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setShowSuccess(false);
      setShowError(true);
    }
  };

  return (
    <Container className="my-5 contact-form">
      <h1 className="text-center">Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-input form-textarea"
          />
        </Form.Group>
        <div className="subBtn">
            <Button variant="primary" type="submit" className="form-button">
            Submit
            </Button>
        </div>
      </Form>
      {showSuccess && (
        <Alert variant="success" className="mt-3">
          Your message was sent successfully!
        </Alert>
      )}
      {showError && (
        <Alert variant="danger" className="mt-3">
          Please fill in all the fields.
        </Alert>
      )}
    </Container>
  );
};

export default technology;
