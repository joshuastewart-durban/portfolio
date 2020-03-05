import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SuccessPage = () => (
  <Layout pageInfo={{ pageName: "success" }}>
    <SEO title="Thanks for getting in touch." />
    <Container className="contact-page px-0">
      <Row>
        <Col className="justify-content-center my-3">
          <h1 className="text-center">Thanks for getting in touch.</h1>
          <p className="text-center">
            Thanks for contacting me!
            <br />
            I will get back to you As soon As possible.
          </p>
          <div className="element-divider">
            <span className="elementor-divider-separator"></span>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default SuccessPage;
