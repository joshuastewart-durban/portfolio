import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <Row>
        <Col className="justify-content-center my-3">
          <h1>My name is <span className="bold upper-case">Joshua</span></h1>
          <h1><span className='upper-case'>I am a developer</span></h1>
          <h1>Here is some of my <span className="upper-case bold">work</span></h1>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
