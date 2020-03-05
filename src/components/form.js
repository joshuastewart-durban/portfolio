import React from "react"
import { Form, Button } from "react-bootstrap"

const ContactForm = ({ styleOption }) => (
  <div>
    <Form action='/success' netlify className='contact-form mx-auto' data-netlify="true" data-netlify-honeypot="bot-field">
      <Form.Group className='wrap-input' controlId="formBasic">
        <Form.Control className="input" type="text" placeholder="Name" name="name" />
      </Form.Group>
      <Form.Group className='wrap-input' controlId="formBasicEmail">
        <Form.Control
          className="input"
          type="email"
          placeholder="Enter email"
          name="email"
        />
      </Form.Group>
      <Form.Group className='wrap-input' controlId="formBasicEnquiry">
        <Form.Control
          className="input"
          type="text"
          placeholder="Enter enquiry"
          name="message"
        />
      </Form.Group>
      <Button style={{float: 'left'}} className='submit-button' type="submit">
        Submit
      </Button>
    </Form>
  </div>
)

export default ContactForm
