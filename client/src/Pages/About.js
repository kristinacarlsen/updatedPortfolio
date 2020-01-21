import React from "react";
import Jumbo from "../Components/Jumbo";
import AboutInfo from "../Components/AboutInfo";

function About(props) {
  return (
    <div>
      <Jumbo title={props.title} />
      <AboutInfo />
    </div>
  );
}

export default About;
