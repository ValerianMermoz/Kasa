import React, {useState} from "react"
import Flechegauche from "../../Images/Flechegauche.png";
import Flechedroite from "../../Images/Flechedroite.png";
import "../../Pages/Fichelogement/Fichelogement.scss";
import useLogement from "./Datalogement";

function Carrousel(){
    const logement = useLogement();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const nextImage = () => {
        setCurrentImageIndex((nextIndex) => (nextIndex + 1) % logement.pictures.length)
    };
    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => {
            if (prevIndex === 0){
                return logement.pictures.length - 1;
            } else {
                return (prevIndex - 1) % logement.pictures.length;
            }
        });
    }
    const currentImage = logement.pictures[currentImageIndex]
    const pictureCounter = `${currentImageIndex + 1} / ${logement.pictures.length}`

    return (
        <section className="carrousel">
            <img src={currentImage} alt="logement" className="carrousel_img"/>
            <img src={Flechedroite} alt="" onClick={nextImage} className="carrousel__arrow carrousel__arrow--right"></img>
            <img src={Flechegauche} alt="" onClick={previousImage} className="carrousel__arrow carrousel__arrow--left"></img>
            <div className="carrousel_counter">{pictureCounter}</div>
        </section>
    )
}
export default Carrousel;