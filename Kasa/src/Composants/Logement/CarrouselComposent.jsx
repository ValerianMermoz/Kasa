import React, {useState} from "react"
import Flechegauche from "../../Images/Flechegauche.png";
import Flechedroite from "../../Images/Flechedroite.png";
import "../../Pages/Fichelogement/Fichelogement.scss";
import useLogement from "./Datalogement";

function Carrousel(){
    const logement = useLogement();
    const [imageActuelle, imageIndex] = useState(0);
    const image = logement.pictures[imageActuelle]
    const compteur = `${imageActuelle + 1} / ${logement.pictures.length}`
    const imageSuivante = () => {
        imageIndex((nextIndex) => (nextIndex + 1) % logement.pictures.length)
    };
    const imagePrecedente = () => {
        imageIndex((prevIndex) => {
            if (prevIndex === 0){
                return logement.pictures.length - 1;
            } else {
                return (prevIndex - 1) % logement.pictures.length;
            }
        });
    }

    return (
        <div className="carrousel">
            <img className="carrousel_img" src={image} alt="logement"/>
            <img className="carrousel__arrow carrousel__flechedroite" src={Flechedroite} alt="" onClick={imageSuivante}></img>
            <img className="carrousel__arrow carrousel__flechegauche" src={Flechegauche} alt="" onClick={imagePrecedente}></img>
            <div className="carrousel_compteur">{compteur}</div>
        </div>
    )
}
export default Carrousel;