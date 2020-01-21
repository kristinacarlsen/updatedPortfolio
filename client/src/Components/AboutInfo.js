import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Content from "../Components/Content";
import kcProfile from "../Images/kcProfile.png";

function AboutInfo() {
  return (
    <Content>
      <Container>
        <Row className="aboutInfo justify-content-center">
          <Col xs="auto">
            <img
              className="profileImg"
              src={kcProfile}
              alt="Kristina Carlsen"
            />
          </Col>
          <Col className="fixedFooter">
            <p>
              I fell in love with web development because it's like putting
              together a puzzle that I get to create. I started my career as an
              educator. I had no experience with code, but I knew I was a good
              teacher, so I started teaching myself. I sped through the basics,
              and moved on to Javascript. I started using React.js to help bring
              organization to my code.
            </p>
            <p>
              Outside of the computer, I'm a mom and avid gardener. I want to
              bring beauty and ease where there is chaos and difficulty.
            </p>
            <p>
              I'm excited to start working with a company that is helping the
              world. I want to help others accomplish their dreams, and solve
              problems. Find out more about me on my{" "}
              <a
                href="https://www.linkedin.com/in/kristina-carlsen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile
              </a>
              .
            </p>
            <p>I want to hear about what you're working on. Contact me here:</p>
            <Link to="/contact">
              <button>Message Me</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Content>
  );
}

export default AboutInfo;
