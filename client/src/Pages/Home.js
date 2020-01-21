import React from "react";
import Jumbo from "../Components/Jumbo";
import Carousel from "../Components/Carousel";

function Home(props) {
  return (
    <div>
      <Jumbo title={props.title} subtitle={props.subtitle} text={props.text} />
      <Carousel />
    </div>
  );
}

export default Home;
