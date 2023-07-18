import "../../Pages/Fichelogement/Fichelogement.scss";
import "../../index.scss";
import etoileactive from "../../Images/étoileactive.png";
import etoileinactive from "../../Images/étoileinactive.png";
import useLogement from "../Logement/Datalogement";

const Titrelogement = () => {
  const logement = useLogement();
  const rating = logement.rating;
  const maxRating = 5;
  const etoiles = [];

  for (let i = 1; i <= maxRating; i++) {
    const isEtoileActive = i <= rating;

    etoiles.push(
      <img
        className="etoile"
        key={i}
        src={isEtoileActive ? etoileactive : etoileinactive}
        alt={isEtoileActive ? "Etoile active" : "Etoile inactive"}
      />
    );
  }
  return (
    <section>
        <div className="titre">
            <div className="titre_info">
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
            </div>
            <div className="titre_nom">
                <p>{logement.host.name}</p>
                <img className="photovendeur" src={logement.host.picture} alt={logement.host.name}></img>
            </div>
        </div>
        <div className="infos">
            <div className="infostags">
                {logement.tags.map((tag, index)=>(
                    <p key={index}>{tag}</p>
                ))}
            </div>
            <div className="Etoiles">{etoiles}</div>
        </div>
    </section>
  )
}

export default Titrelogement;
