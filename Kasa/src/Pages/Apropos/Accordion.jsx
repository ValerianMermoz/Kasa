import './Apropos.scss';

import React, { useState } from 'react';
const Chevrondown = require('../../Images/Flechebas.png');

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" >
        <h2>{title}</h2>
        <div onClick={() => setIsActive(!isActive)}><img src={Chevrondown}className='Chevrondown'></img></div>
      </div>
      {isActive && <p className="accordion-content">{content}</p>}
    </div>
  );
};

export default Accordion;