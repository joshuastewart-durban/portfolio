/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import ContactForm from "./form"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container style={{ backgroundColor: "#fcfcfc" }} fluid className="main py-3">
          <Navbar pageInfo={pageInfo} />
          <Container>
            <Row>
              <Col>
                <hr style={{ width: "100%" }} />
              </Col>
            </Row>
          </Container>
          <Row noGutters>
            <Col>
              <Container fluid className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className="pb-3">
              <ContactForm />
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </span>
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
