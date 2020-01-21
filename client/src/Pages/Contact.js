import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";

import Content from "../Components/Content";
import Jumbo from "../Components/Jumbo";
import axios from "axios";

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",

      misc: {
        succAlert: false,
        isValid: true,
        backErr: null
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange = e => {
    this.setState(prev => ({
      misc: {
        ...prev.misc,
        succAlert: false,
        isValid: true,
        backErr: null
      }
    }));

    this.setState({ [e.target.name]: e.target.value });
  };

  resetForm = e => {
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.email && this.state.name && this.state.message) {
      axios({
        method: "POST",
        url: "/api/form",
        data: this.state
      })
        .then(resp => {
          if (resp.status === 200 && resp.data.msg === "email sent") {
            this.resetForm();
            this.setState(prev => ({
              misc: {
                ...prev.misc,
                succAlert: true
              }
            }));
          }
        })
        .catch(err => {
          if (err.message === "Network Error") {
            this.setState(prev => ({
              misc: {
                ...prev.misc,
                backErr: `${err.messsage}`
              }
            }));
          } else {
            console.log(err);
          }
        });
    } else {
      this.setState(prev => ({
        misc: {
          ...prev.misc,
          isValid: false
        }
      }));
    }
  };

  render() {
    return (
      <Content>
        <Jumbo title="Let's talk!" />
        <Form
          className="fixedFooter"
          method="POST"
          onSubmit={this.handleSubmit}
        >
          {this.state.misc.succAlert && (
            <Alert variant="success" className="text-center">
              Your message sent. Talk to you soon!
            </Alert>
          )}
          {!this.state.misc.isValid && (
            <Alert variant="danger" className="text-center">
              {this.state.misc.backErr}
            </Alert>
          )}
          {!this.state.misc.isValid && (
            <Alert variant="warning" className="text-center">
              Uh oh! Something is blank.
            </Alert>
          )}

          <Form.Group>
            <Form.Label htmlFor="full-name">Full Name</Form.Label>
            <Form.Control
              id="full-name"
              name="name"
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              id="message"
              name="message"
              as="textarea"
              rows="4"
              onChange={this.handleChange}
              value={this.state.message}
            ></Form.Control>
          </Form.Group>

          <Button className="d-inline-block" variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Content>
    );
  }
}

export default ContactMe;
