import { useState } from "react";
import "../../Pages/Fichelogement/Fichelogement.scss";
import "../../Pages/Apropos/Apropos.scss";

const Chevrondown = require("../../Images/Flechebas.png");

const AccordionLogement = ({ content, text }) => {
  const [isActive, setIsActive] = useState(false);
  const [rotateChevron, setRotateChevron] = useState(false);

  const handleRotate = () => setRotateChevron(!rotateChevron);

  return (
    <div className="accordion-item">
      <div className="accordion-title">
        <h2>{text}</h2>
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

export default AccordionLogement;
