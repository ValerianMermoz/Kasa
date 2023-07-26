import React from "react";
import Data from '../../annonces';
import { useParams } from 'react-router-dom';
import Accordion from "../../Composants/Accordion/Accordion"
import Titlelogement from "../../Composants/Logement/Titlelogement";
import Carrousel from "../../Composants/Logement/Carrousel";
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
            <Titlelogement/>
            <section className='Accordionlog'>
            <Accordion text="Description" content={logement.description}/>
            <Accordion text="Equipement" content={<ul>{logement.equipments.map((equipements) => <li key={equipements}>{equipements}</li>)}</ul>}/>
            </section>
            
</div>
    );
};

export default FicheLogement;

