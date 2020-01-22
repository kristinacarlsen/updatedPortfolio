import React from "react";
import Jumbo from "../Components/Jumbo";
import Card from "react-bootstrap/Card";

const ContactMe = () => {
  return (
    <div>
      <Jumbo title="Let's Talk!" />

      <Card className="text-center">
        <Card.Body>
          <Card.Title>Send me an email!</Card.Title>
          <Card.Text>I look forward to hearing from you.</Card.Text>
          <a
            href="mailto:kristida84@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            kristida84@gmail.com
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactMe;
