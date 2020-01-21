import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Jumbo(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0" fluid={true}>
      <Container>
        <Row className="justify-content-center py-3 jumbo">
          <Col md={8} sm={12}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder">{props.title}</h1>
            )}

            {props.subtitle && <h3 className="display-5">{props.subtitle}</h3>}

            {props.text && (
              <p className="lead font-weight-light">{props.text}</p>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Jumbo;
