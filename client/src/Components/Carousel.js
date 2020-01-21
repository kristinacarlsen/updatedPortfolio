import React from "react";
import Card from "../Components/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import realityRealty from "../Images/realityRealty.png";
import garden from "../Images/garden.png";
import trajectory from "../Images/trajectory.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Reality Realty",
          subtitle: "Realty site built with Javascript",
          imgSrc: realityRealty,
          codeLink: "https://github.com/kristinacarlsen/realityRealtor",
          siteLink: "https://kristinacarlsen.github.io/realityRealtor/",
          selected: false
        },
        {
          id: 1,
          title: "Trajectory",
          subtitle: "A blog site built with React.js",
          imgSrc: trajectory,
          codeLink: "https://github.com/kristinacarlsen/Trajectory",
          siteLink: "https://kristinacarlsen.github.io/Trajectory/",
          selected: false
        },
        {
          id: 2,
          title: "The Garden",
          subtitle: "A website for a plant business created with Javascript",
          imgSrc: garden,
          codeLink: "https://github.com/kristinacarlsen/landingPage",
          siteLink: "https://kristinacarlsen.github.io/TheGarden/",
          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container className="projects" fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
