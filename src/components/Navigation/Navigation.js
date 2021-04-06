import React from "react";
import {Navbar, Nav, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

function Navigation () {
 return (
<Row>
  <Col>
    <Navbar variant="dark" className="justify-content-end">
      <Nav defaultActiveKey="/home">
      <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about-me">About Me</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/projects">Featured Projects</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact">Contact</Link>
        </Nav.Item>
    </Nav>
    </Navbar> 
  </Col>
</Row>
  )
  }

  export default Navigation;