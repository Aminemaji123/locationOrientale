import React from 'react';
import '../styles/HeroStyles.css';
import { FaCheckCircle, FaAngleRight } from 'react-icons/fa';
import { bgImg, heroCar } from '../assets/index';
import ScrollReveal from 'scrollreveal';

const Hero = () => {
  ScrollReveal().reveal('.headline');
  ScrollReveal().reveal('.hero-text', { delay: 500 });
  ScrollReveal().reveal('.punchline', { delay: 2000 });

  return (
    <>
      <section className='home-section max-w-[1920px]'>

        <div className='hero'>
          <img src={bgImg} className='hero-bg' alt='image de fond' />

          <div className='hero-content'>
            <div className='hero-text'>
              <h4>Planifiez votre voyage maintenant</h4>
              <h1>Économisez <span>grand</span> avec notre location de voitures</h1>

              <p>
                Vivez l'expérience de vos rêves avec une location de voiture à des prix imbattables, 
                un kilométrage illimité, des choix flexibles de prise en charge et des avantages supplémentaires.
              </p>

              <div className='hero-btns'>
                <button className='hero-btn book-btn'>Réservez une course <FaCheckCircle /></button>
                <button className='hero-btn learn-btn'>En savoir plus <FaAngleRight /></button>
              </div>
            </div>

            <img src={heroCar} className='hero-img' alt='image de voiture' />
          </div>
        </div>

      </section>
    </>
  );
}

export default Hero;
