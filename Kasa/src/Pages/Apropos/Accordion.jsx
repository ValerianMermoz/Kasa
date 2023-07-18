import "./Apropos.scss";
import React, { useState } from "react";

const Chevrondown = require("../../Images/Flechebas.png");

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [rotateChevron, setRotateChevron] = useState(false);

  const handleRotate = () => setRotateChevron(!rotateChevron);

  return (
    <div className="accordion-item">
      <div className="accordion-title">
        <h2>{title}</h2>
        <div className="Chevron" onClick={() => setIsActive(!isActive)}>
          <img
            src={Chevrondown}
            className={`filters__chevron ${rotateChevron ? "rotate" : ""}`}
            onClick={handleRotate}
            alt="boutonChevron"
          ></img>
        </div>
      </div>
      {isActive && <div className={`accordion-content ${rotateChevron ? "ouvert" : ""}`}>{content}</div>}
    </div>
  );
};

export default Accordion;
