import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/form";

const ContactPage = () => (
  <Layout pageInfo={{ pageName: "contact-page" }}>
    <SEO title="Contact Us" />
    <Container className="contact-page px-0">
      <Row>
        <Col className="justify-content-center my-3">
          <h1 className="text-center">Contact Me</h1>
          <p className="text-center">
            Need Help? Then please contact me,
            <br />
            I will get back to you As soon As possible.
          </p>
          <div className="element-divider">
            <span className="elementor-divider-separator"></span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="bio-column">
          <p className="bio">
            I am a software engineer, I have experience in a wide variety of
            technologies from JavaScript web application development to custom
            Wordpress websites. I would love to help you develop a website, get intouch!
          </p>
          <h2>Address</h2>
          <p>Durban, South Africa</p>
          <h2>Email</h2>
          <p>
            info@joshuastewart.design <br />
            www.joshuastewart.design
          </p>
        </Col>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default ContactPage;
