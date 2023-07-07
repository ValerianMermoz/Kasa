import Erreurimg from '../../Images/404.png';

function Error() {
  return (
    <div class="texterreur">
      <img src={Erreurimg} className='Erreurimg' alt="404" />
      <h4>Oups! La page que vous demandez n'existe pas.</h4>
      <a href="http://localhost:3001/">Retourner sur la page d'accueil</a>
    </div>
  );
}

export default Error;
