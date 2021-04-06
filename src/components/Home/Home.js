import React from "react";
import {Button, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";


function Home () {
return (
<Row className="content">
  <Col>
    <Row>
      <Col className="intro">
      My name is <span class="name">Andree Matthews</span>.
      I am a Full-Stack Developer.
      </Col>
    </Row>
    <Row className="mt-4">
      <Col>
        <Link to="/projects">
          <Button variant="outline-primary">View Portoflio</Button>
        </Link>
      </Col>
    </Row>
  </Col>
</Row>
)
};

export default Home;