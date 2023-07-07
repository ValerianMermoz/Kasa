import React, { useState } from 'react';
import Chevronup from '../../Images/Flechebas.png';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h2>{title}</h2>
        <div>{isActive ? 'arrow_back_ios-24px 2' : '<img src={Chevronup}/>'}</div>
      </div>
      {isActive && <p className="accordion-content">{content}</p>}
    </div>
  );
};

export default Accordion;