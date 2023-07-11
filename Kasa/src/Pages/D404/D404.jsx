import Erreurimg from '../../Images/404.png';
import './D404.scss';

function Error() {
  return (
    <div class="texterreur">
      <img src={Erreurimg} className='Erreurimg' alt="404" />
      <h4>Oups! La page que vous demandez n'existe pas.</h4>
      <a href="../">Retourner sur la page d'accueil</a>
    </div>
  );
}

export default Error;
