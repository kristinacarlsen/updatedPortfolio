import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <Navbar bg="light" fixed="bottom">
      <Container className="footText">
        <Navbar.Text>Code by KC</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;
