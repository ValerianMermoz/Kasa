function Error() {
    function Banner(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }
  return (
    <div class="texterreur">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p>Retourner sur la page d'accueil</p>
    </div>
  );
}

export default Error;
