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
          <h1 className='text-center'>Contact Us</h1>
          <p className='text-center'>
            Need Help? Then please contact with us,
            <br />
            We will get back to you As soon As possible
          </p>
          <div className="element-divider">
            <span className="elementor-divider-separator"></span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='bio'>
            Lorem ipsum dolor sit amet, consectetu sicing. Iste ratione
            molestias. Lorem ipsum dolor sit amet, consectetur adipisicing.
            Ratione molesti magni risus.
          </p>
          <h2>Address</h2>
          <p>Durban, South Africa</p>
          <h2>Email</h2>
          <p>info@joshuastewart.design <br/>
          www.joshuastewart.design</p>
        </Col>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default ContactPage;
