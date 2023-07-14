import {useState} from "react";
import "../../Pages/Fichelogement/Fichelogement.scss";
import "../../Pages/Apropos/Apropos.scss";

const Chevrondown = require('../../Images/Flechebas.png');

const AccordionLogement = ({ content, text }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <div className="accordion-item">
        <div className="accordion-title" >
          <h2>{text}</h2>
          <div onClick={() => setIsActive(!isActive)}><img src={Chevrondown}className='Chevrondown'></img></div>
        </div>
        {isActive && <p className="accordion-content">{content}</p>}
      </div>
    );
  };

export default AccordionLogement;


