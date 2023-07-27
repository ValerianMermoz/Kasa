import "../../Pages/Cardlogement/Cardlogement.scss";
import "../../index.scss";
import Datalogement from "../Logement/Datalogement";
import { ReactComponent as Etoile } from "../../Images/etoile.svg";
import { ReactComponent as EtoileCouleur } from "../../Images/etoileCouleur.svg";

const titleLogement = () => {
  const { title, location, host, tags, rating } = Datalogement();
 
  const maxRating = 5;
  const etoiles =
  Array.from({ length: maxRating }, (_, index) => (
  <div key={index}>
  {index < rating ? <EtoileCouleur/> : <Etoile/> }
  </div>
  ));

  return (
    <>
      <section className="detailsLog">
        <div className="titre">
          <div className="titre_info">
            <h3>{title}</h3>
            <p>{location}</p>
          </div>
          <div className="infostags">
            {tags.map((tag, index) => (
             <p key={index}>{tag}</p>
            ))
            }
          </div>
         
        </div>
        <div className="infos">
          <div className="titre_nom">
            <p>{host.name}</p>
            <img className="photovendeur" src={host.picture} alt={host.name} />
          </div>
          <div className="etoiles">{etoiles}</div>
        </div>
      </section>
    </>
  );
};

export default titleLogement;
