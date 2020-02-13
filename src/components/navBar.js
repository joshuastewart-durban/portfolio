import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar expand="lg" id="site-navbar">
        <Container>
          <Row style={{ width: "100%" }}>
            <Col>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                  className="ml-auto"
                  activeKey={pageInfo && pageInfo.pageName}
                >
                  <Link to="/" className="link-no-style">
                    <Nav.Link as="span" eventKey="projects">
                      Projects
                    </Nav.Link>
                  </Link>
                  <Link to="/" className="link-no-style">
                    <Nav.Link as="span" eventKey="contact">
                      Contact
                    </Nav.Link>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar
