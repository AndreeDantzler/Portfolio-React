import React from "react";
import {Button, Row, Col} from "react-bootstrap";


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
        <Button href="/projects" variant="outline-primary">View Portoflio</Button>
      </Col>
    </Row>
  </Col>
</Row>
)
};

export default Home;