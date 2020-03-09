import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";
import scratchpatch from "../images/scratchPatch.png";
import vox from "../images/voxcoal.png";
import swiftBand from "../images/swiftBand.png";
import ContactForm from "../components/form";

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container fluid className="text-center px-0">
      <Row noGutters>
        <Col className="justify-content-center my-3">
          <h1>
            My name is <span className="bold upper-case">Joshua</span>
            <br />
            <span className="upper-case">I am a developer</span>
            <br />
            Here is some of my <span className="upper-case bold">work</span>
          </h1>
        </Col>
      </Row>
      <Row
        className="work-row-padding work-row"
        style={{ backgroundColor: "#fcfcfc" }}
        noGutters
      >
        <Col className="mb-4" md={6} lg={4}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://sagescratchpatch.co.za/"
          >
            <img src={scratchpatch} alt="Sage Scratch Patch" />
          </a>
        </Col>
        <Col className="mb-4" md={6} lg={4}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.voxcoal.co.za/"
          >
            <img src={vox} alt="Voxcoal" />
          </a>
        </Col>
        <Col className="mb-4" md={6} lg={4}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://swiftband.com/"
          >
            <img src={swiftBand} alt="Swift Band" />
          </a>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col className="contact-us">
          <h2 className="text-center">Contact Me</h2>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
