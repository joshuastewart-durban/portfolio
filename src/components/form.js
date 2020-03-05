import React from "react";

const ContactForm = ({ styleOption }) => (
  <div>
    <form
      className="contact-form mx-auto"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div className="wrap-input">
        <input
          placeholder="Name"
          type="text"
          name="name"
          id="name"
          className="input"
        />
      </div>
      <div className="wrap-input">
        <input
          placeholder="Email"
          type="text"
          name="email"
          id="email"
          className="input"
        />
      </div>
      <div className="wrap-input">
        <textarea
          placeholder="Message"
          name="message"
          id="message"
          rows="6"
          className="input"
        />
      </div>
      <input
        type="submit"
        value="Send Message"
        style={{ float: "left" }}
        className="submit-button"
      />
    </form>
  </div>
);

export default ContactForm;
