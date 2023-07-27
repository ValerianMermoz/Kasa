import React from "react";
import Data from '../../annonces';
import { useParams } from 'react-router-dom';
import Accordion from "../../Composants/Accordion/Accordion"
import Titlelogement from "../../Composants/Logement/Titlelogement";
import Carrousel from "../../Composants/Logement/Carrousel";
import Error from "../D404/D404";


const Cardlogement = () => {
    const {id} = useParams();
 
    const logement = Data.find((item) => item.id === id)
   if(! logement){
    return ( <> <Error /> </> );
   }

   const equipements = logement.equipments.map((equipement, index) => (
    <li key={index}>{equipement} </li>
  ));

    return ( 
        <div>
            <Carrousel/>
            <Titlelogement/>
            <section className='Accordionlog'>
            <Accordion text="Description" content={logement.description}/>
            <Accordion text="Equipement" content={<ul>{equipements}</ul>}/>
  
            </section>
            
</div>
    );
};

export default Cardlogement;

