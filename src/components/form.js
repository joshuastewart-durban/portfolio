import React from "react"
import { Form, Button } from "react-bootstrap"

const ContactForm = ({ styleOption }) => (
  <div>
    <Form className='contact-form mx-auto' data-netlify="true" data-netlify-honeypot="bot-field">
      <Form.Group className='wrap-input' controlId="formBasic">
        <Form.Control className="input" type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className='wrap-input' controlId="formBasicEmail">
        <Form.Control
          className="input"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className='wrap-input' controlId="formBasicEnquiry">
        <Form.Control
          className="input"
          type="text"
          placeholder="Enter enquiry"
        />
      </Form.Group>
      <Button style={{float: 'left'}} className='submit-button' type="submit">
        Submit
      </Button>
    </Form>
  </div>
)

export default ContactForm
