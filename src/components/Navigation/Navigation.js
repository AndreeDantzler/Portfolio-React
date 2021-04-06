import React from "react";
import {Navbar, Nav, Row, Col} from "react-bootstrap";

function Navigation () {
 return (
<Row>
  <Col>
    <Navbar variant="dark" className="justify-content-end">
      <Nav defaultActiveKey="/home">
      <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about-me">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects">Featured Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
    </Nav>
    </Navbar> 
  </Col>
</Row>
  )
  }

  export default Navigation;