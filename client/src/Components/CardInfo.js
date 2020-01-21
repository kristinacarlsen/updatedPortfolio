import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="k-card-info" style={style}>
      <p className="k-card-title">{props.title}</p>

      <p className="k-card-subtitle">{props.subtitle}</p>

      <button>
        <a href={props.codeLink} target="_blank" rel="noopener noreferrer">
          View Code
        </a>
      </button>

      <button>
        <a href={props.siteLink} target="_blank" rel="noopener noreferrer">
          View Site
        </a>
      </button>
    </animated.div>
  );
}

export default CardInfo;
