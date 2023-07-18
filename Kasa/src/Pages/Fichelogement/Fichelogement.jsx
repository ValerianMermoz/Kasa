import React from "react";
import Data from '../../annonces';
import { useParams } from 'react-router-dom';
import Accordionlogement from "../../Composants/Logement/Accordionlogement"
import Titrelogement from "../../Composants/Logement/Contenulogement";
import Carrousel from "../../Composants/Logement/CarrouselComposent";
import Error from "../D404/D404";


const FicheLogement = () => {
    const {id} = useParams();
 
    const logement = Data.find((item) => item.id === id)
   if(! logement){
    return ( <> <Error /> </> );
   }

    return ( 
        <div>
            <Carrousel/>
            <Titrelogement/>
            <section className='Accordionlog'>
            <Accordionlogement text="Description" content={logement.description}/>
            <Accordionlogement text="Equipement" content={<ul>{logement.equipments.map((equipements) => <li key={equipements}>{equipements}</li>)}</ul>}/>
            </section>
            
</div>
    );
};

export default FicheLogement;

