/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "./navBar";

config.autoAddCss = false;

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
        <Container fluid className="px-0 main py-3">
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
              <Container fluid className="mt-5 px-0">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <Row className="footer-body mx-auto ">
                  <Col md={6} lg={3}>
                    <h2 className="bold">About me</h2>
                    <p>Software Developer</p>
                  </Col>
                  <Col md={6} lg={3}>
                    <h2 className="bold">CONTACT ME</h2>
                    <p>info@joshuastewart.design</p>
                  </Col>
                  <Col md={6} lg={3}>
                    <h2 className="bold">ADDRESS</h2>
                    <p>Durban, South Africa</p>
                  </Col>
                  <Col md={6} lg={3} className="social-icons">
                    <a
                      href="https://www.instagram.com/jlushjlush/"
                      className="px-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        style={{ color: "#54595f" }}
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/jlushjlush"
                      className="px-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        size="2x"
                        style={{ color: "#54595f" }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/joshua-stewart-9248b5116/"
                      className="px-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        style={{ color: "#54595f" }}
                      />
                    </a>
                    <a
                      href="https://github.com/joshuastewart-durban"
                      className="px-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="2x"
                        style={{ color: "#54595f" }}
                      />
                    </a>
                  </Col>
                </Row>
                {/* <Row className='mx-auto'>
                  <Col>
                    <span>
                      © {new Date().getFullYear()}, Built by
                      {` `}
                      <a href="">Joshua Stewart</a>
                    </span>
                  </Col>
                </Row> */}
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
);

export default Layout;
