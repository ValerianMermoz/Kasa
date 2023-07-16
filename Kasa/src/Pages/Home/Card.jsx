import { useNavigate } from "react-router-dom";

function Card({ id, picture, title }) {
  const path = `/Fichelogement/${id.id}`;
  let history = useNavigate();
  function handleClick() {
    history(path);
  }

  return (
    <div className="Card" onClick={handleClick}>
      <div className="titrecard">
        <img className="image" src={picture} alt={title}></img>
        <div className="texteCard">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
