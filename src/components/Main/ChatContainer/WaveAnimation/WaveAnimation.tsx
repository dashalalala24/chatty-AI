import { useEffect, useRef } from "react";

import "./WaveAnimation.css";
import Animation from "../../../../utils/Animation";
import Record from "../Record/Record";
import { render } from "react-dom";

const WaveAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerNode = containerRef.current;
    const wavesContainer = document.getElementById("wave__animation");
    if (containerNode && wavesContainer) {
      render(
        <Animation inMin={0} inMax={1} outMin={-0.05} outMax={-0.02} />,
        wavesContainer
      );
    }
  }, []);

  return (
    <div className="wave__section" id="wave__section" ref={containerRef}>
      <div className="wave__animation" id="wave__animation"></div>
      <div className="wave__record" id="wave__record">
        <Record />
      </div>
    </div>
  );
};

export default WaveAnimation;
