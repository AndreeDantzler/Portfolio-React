import React from "react";
import {Row, Col, ListGroup} from "react-bootstrap";

function Contact() {
  return (
    <Row className="content">
      <Col>
        <ListGroup>
          <ListGroup.Item>704-953-1010</ListGroup.Item>
          <ListGroup.Item>andree.balayssac@icloud.com</ListGroup.Item>
          <ListGroup.Item>
            <a href="/pdf/Resume-AndreeMatthews.pdf" target="blank">
              Resume
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default Contact;
