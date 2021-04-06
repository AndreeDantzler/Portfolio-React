import React from "react";
import {Jumbotron, Row, Col} from "react-bootstrap";

function Header() {
	return (
<Jumbotron>
	<Row>
  	<Col><h1 className="justify-content-center">Hello World!</h1></Col>
	</Row>
</Jumbotron>
	)
}

export default Header;
