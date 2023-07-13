import { Link, useNavigate } from "react-router-dom";

function Card(id) {
  const path = `/Fichelogement/${id.id}`;
  let history = useNavigate();
  function handleClick() {
    history(path);
  }

  console.log(id.id);
  return (
    <div className="Card" onClick={handleClick}>
      <div className="titrecard">
        <h2>Titre de la location</h2>
      </div>
    </div>
  );
}

export default Card;
