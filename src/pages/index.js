import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import scratchpatch from '../images/scratchPatch.png'
import vox from '../images/voxcoal.png'
import swiftBand from '../images/swiftBand.png'

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container fluid className="text-center">
      <Row noGutters>
        <Col className="justify-content-center my-3 mb-5">
          <h1>
            My name is <span className="bold upper-case">Joshua</span>
          </h1>
          <h1>
            <span className="upper-case">I am a developer</span>
          </h1>
          <h1>
            Here is some of my <span className="upper-case bold">work</span>
          </h1>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "white" }} noGutters>
        <Col>
        <img src={scratchpatch} width="300px"/>
        </Col>
        <Col>
        <img src={vox} width="300px"/>
        </Col>
        <Col>
        <img src={swiftBand} width="300px"/>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage