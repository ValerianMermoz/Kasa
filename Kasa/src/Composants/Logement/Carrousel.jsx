import React, { useState } from "react";
import Flechegauche from "../../Images/Flechegauche.png";
import Flechedroite from "../../Images/Flechedroite.png";
import "../../Pages/Cardlogement/Cardlogement.scss";
import Datalogement from "./Datalogement";

const Carrousel = () => {
  const logement = Datalogement();
  const [imageActuelle, setImageActuelle] = useState(0);
  const image = logement.pictures[imageActuelle];
  const compteur = `${imageActuelle + 1} / ${logement.pictures.length}`;

  const imageSuivante = () => {
    setImageActuelle((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex === logement.pictures.length ? 0 : nextIndex;
    });
  };

  const imagePrecedente = () => {
    setImageActuelle((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? logement.pictures.length - 1 : nextIndex;
    });
  };
  if (logement.pictures.length <= 1) {
    return (
      <div className="carrousel">
        <img className="carrousel_img" src={image} alt="logement" />
      </div>
    );
  }
  return (
    <div className="carrousel">
      <img className="carrousel_img" src={image} alt="logement" />
      <img
        className="carrousel__fleche carrousel__flechedroite"
        src={Flechedroite}
        alt=""
        onClick={imageSuivante}
      ></img>
      <img
        className="carrousel__fleche carrousel__flechegauche"
        src={Flechegauche}
        alt=""
        onClick={imagePrecedente}
      ></img>
      <div className="carrousel_compteur">{compteur}</div>
    </div>
  );
};
export default Carrousel;
