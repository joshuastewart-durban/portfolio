import React from "react";
import { Link } from "gatsby";
import logo from "./../images/JoshuaStewart.png";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo);
  return (
    <>
      <Navbar expand="lg" id="site-navbar">
        <Container>
          <Row style={{ width: "100%" }}>
            <Col>
              <Navbar.Brand href="#home">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "150px" }}
                  className="mr-auto"
                  activeKey={pageInfo && pageInfo.pageName}
                ></img>
              </Navbar.Brand>
            </Col>
            <Col style={{ paddingTop: "8px" }}>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                style={{ float: "right" }}
              />
              <Navbar.Collapse
                id="basic-navbar-nav"
                style={{float: "right" }}
                className='navbar-collapse-mobile'
              >
                <Nav
                  className="ml-auto"
                  activeKey={pageInfo && pageInfo.pageName}
                >
                  <Link to="/" className="link-no-style">
                    <Nav.Link as="span" eventKey="projects">
                      Projects
                    </Nav.Link>
                  </Link>
                  <Link to="/contact-page" className="link-no-style">
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
  );
};

export default CustomNavbar;
