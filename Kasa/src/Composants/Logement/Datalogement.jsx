import { useParams } from "react-router-dom";
import Data from "../../annonces";

const useLogement = () => {
  const { id } = useParams();

  if (!Data || Data.length === 0) {
    console.error("Aucune donnée de logement n'est disponible.");
    return null;
  }

  const logement = Data.find((item) => item.id === id);

  if (!logement) {
    console.error(`Aucun logement trouvé avec l'ID : ${id}`);
    return null;
  }

  return logement;
};

export default useLogement;
