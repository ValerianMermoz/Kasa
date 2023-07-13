import React from 'react';
import Accordion from './Accordion';
import Banner from "../../Composants/Banners/Banner";
import img from "../../Images/Bannerpropos.png";

const Apropos = () => {
  const accordionData = [
    {
      title: 'Fiabilité',
      content: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.`
    },
    {
      title: 'Respect',
      content: `La bienveillance fait partie des valeurs fondratices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`
    },
    {
      title: 'Service',
      content: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.`
    },
    {
      title: 'Sécurité',
      content: `La sécurité est la priorité de Kasa. Aussi bien nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`
    }
  ];

  return (
    <div>
      <Banner image={img}/>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Apropos;
