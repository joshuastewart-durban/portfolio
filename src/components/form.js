import React from "react"
import { Form, Button } from "react-bootstrap"

const ContactForm = ({ siteTitle }) => (
  <div>
    <h2>Contact us</h2>
    <Form>
      <Form.Group className='wrap-input' controlId="formBasic">
        <Form.Control className="input" type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className='wrap-input' controlId="formBasicEmail">
        <Form.Control
          className="input"
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className='wrap-input' controlId="formBasicEnquiry">
        <Form.Control
          className="input"
          type="text"
          placeholder="Enter enquiry"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
)

export default ContactForm
