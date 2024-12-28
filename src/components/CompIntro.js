import React from 'react';
import '../styles/CompIntro.css';
import { sc, co, ld } from '../assets/index';

const CompIntro = () => {
  return (
    <div className='section max-w-[1920px]'>
       
        <h4>Planifiez votre voyage dès maintenant</h4>
        <h1>Location de voiture rapide et facile</h1>

        <div className='Intro-boxes'>

            <div className='Intro-box'>
                <img src={sc} className='intro-avatar' alt='Icône sélection voiture'/>
                <h2>Sélectionnez une voiture</h2>
                <p>Nous proposons une large gamme de véhicules pour 
                   répondre à tous vos besoins. Nous avons la voiture 
                   parfaite pour vous.
                </p>
            </div>

            <div className='Intro-box'>
                <img src={co} alt='Icône service client'/>
                <h2>Service Client</h2>
                <p>Location de voitures Oriental : sans chèque et avec une garantie maximale de <span>5000 DH</span> Profitez d'une location de voitures simple et accessible avec Car Rental Oriental.  
<ul>
 <li>Sans chèque requis : Simplifiez vos démarches, aucune garantie par chèque n'est demandée.</li>  
 <li>Garantie plafonnée à 5000 DH : Un montant raisonnable pour votre tranquillité d'esprit.  </li>
 </ul>
Nous offrons une solution pratique et transparente pour vos besoins de déplacement, en vous assurant confort et sérénité.
                </p>
            </div>

            <div className='Intro-box'>
                <img src={ld} alt='Icône déplacement'/>
                <h2>Nous bougeons</h2>
                <p>Que vous partiez à l'aventure sur la route, 
                   nous avons ce qu'il vous faut avec notre large 
                   choix de voitures. Pas de perte de temps !
                </p>
            </div>

        </div>

    </div>
  );
};

export default CompIntro;
