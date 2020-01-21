import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Kristina Carlsen",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/con" }
      ],
      home: {
        title: "Welcome",
        subtitle: "Let me show you what I can do.",
        text: "Check out my projects below"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Let's talk!"
      }
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Kristina Carlsen</Navbar.Brand>

            <Navbar.Toggle className="border-0" area-controls="navbar-toggle" />

            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (
              <Home
                title={this.state.home.title}
                subtitle={this.state.home.subtitle}
                text={this.state.home.text}
              />
            )}
          ></Route>

          <Route
            path="/about"
            render={() => <About title={this.state.about.title} />}
          ></Route>

          <Route
            path="/contact"
            render={() => <Contact title={this.state.contact.title} />}
          ></Route>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
