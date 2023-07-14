import {useParams} from "react-router-dom"
import Data from "../../annonces";

const useLogement = () => {
    const {id} = useParams();
    const logement = Data.find((item) => item.id === id)
    return logement;
};

export default useLogement;