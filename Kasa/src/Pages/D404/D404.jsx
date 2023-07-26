import Erreurimg from '../../Images/404.png';
import './D404.scss';
import Home from "../Home/Home";
import {Link} from "react-router-dom";

function Error() {
  return (
    <div className="texterreur">
      <img src={Erreurimg} className='Erreurimg' alt="404" />
      <h4>Oups! La page que vous demandez n'existe pas.</h4>
      <Link to={"/"} activeClassName="retour">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
