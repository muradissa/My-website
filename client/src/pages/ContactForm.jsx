import React, { useState,useRef} from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "../ContactForm.css";
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_reke0y2', 'template_qteprvi', form.current, 'wf6kgANltuqu8-Rp6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //service_reke0y2
    // Here you can add your own logic for sending the form data to a server, for example using Axios
    // ...
    emailjs.sendForm('service_reke0y2', 'template_qteprvi', form.current, 'wf6kgANltuqu8-Rp6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

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
      <h1 className="text-center">Contact me</h1>
      <Form ref={form} onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            name="user_name"
          />
        </Form.Group>
        <br/>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            name="user_email"
          />
        </Form.Group>
        <br/>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-input form-textarea"
            name="message"
          />
          
        </Form.Group>
        <br/>
        <div className="subBtn">
            <Button variant="primary" type="submit" className="form-button">
            Submit
            </Button>
        </div>
      </Form>
      {showSuccess && (
        <Alert variant="success" className="mt-3 successText">
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

export default ContactForm;
