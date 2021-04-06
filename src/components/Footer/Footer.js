import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";

function FooterPage () {
return (
  <Row className="mt-4 footer">
  <Col>
    <Navbar variant="dark">
      <Nav>
        <Nav.Item>
          <Nav.Link href="https://github.com/AndreeDantzler" target="_blank">GitHub</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.linkedin.com/in/andree-matthews-30022a73/" target="_blank">LinkedIn</Nav.Link>
        </Nav.Item>
    </Nav>
    </Navbar> 
  </Col>
</Row>

)
}

export default FooterPage;