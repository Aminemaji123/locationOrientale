import React from 'react';
import '../styles/AboutCompStyles.css';
import { car, carout, carshop, worker } from '../assets/index';

const AboutComp = () => {
  return (
    <div className='aboutcomp-sec'>

      <div className='aboutcomp-con'>
        <div className='ac-left'>

          <img src={worker} alt="Travailleur" />

        </div>

        <div className='ac-right'>

          <h4>À propos de la société Rental Oriental</h4>
          <h2>Vous démarrez le moteur et votre aventure commence</h2>
          <p>Certainement, mais elle, par timidité, pourquoi le cottage.  
             L'homme a mis l'instrument, monsieur, des supplications affrontantes.  
             Prétendu exquis, voyez cordialement. Les semaines calmes  
             sont agitées ou de qui. Immobile si non pour éviter  
             l'imprudence sans précaution.  
             Mon indulgence s'est fortement manifestée à disposition.</p>

          <div className='ac-boxes'>

            <div className='ac-box'>
              <img src={car} alt="Voiture" />
              <h3>85<sup>Types de voitures</sup></h3>
            </div>

            <div className='ac-box'>
              <img src={carout} alt="Agence" />
              <h3>65<sup>Agences de location</sup></h3>
            </div>

            <div className='ac-box'>
              <img src={carshop} alt="Atelier" />
              <h3>45<sup>Ateliers de réparation</sup></h3>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutComp;
