import React from 'react';
import '../styles/FooterStyles.css';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='footer-con'>

            <div className='footer-box fb-1'>
                <h3>CAR Oriontale</h3>
                <p>Nous offrons une large gamme de véhicules
                    pour tous vos besoins de conduite.
                    Nous avons la voiture parfaite pour répondre à vos attentes.
                    les véhicules les plus prêter sont de la gamme Dacia Renault 
                </p>
                <span className='span-flex sf-1'>
                <FaPhoneAlt/>
                <p>+212 716-966803</p>
                <p>+212 639660393</p>
                </span>
                <span className='span-flex sf-2'>
                <FaEnvelope/>
                <p><a hreh="">mohamedamineabbaoui4@gmail.com</a></p>
                 <br/>
                   <p><a href="">MarouneZiyani@gmail.com</a></p>
                
                </span>

                <h5>Amine Abbaoui est Maroune Ziani</h5>
            </div>

            <div className='footer-box fb-2'>
                <h3>DÉVELOPPEUR</h3>
                <ul>
                    <li><a href='https://www.instagram.com/abbaoui__amine' target='_blank'>Instagram</a></li>
                    <li><a href='#' target='_blank'>WhatsApp</a></li>
                </ul>
            </div>

            <div className='footer-box fb-3'>
                <h3>HORAIRES DE TRAVAIL</h3>
                <p>Lun - Ven : 9h00 - 21h00</p>
                <p>Sam : 9h00 - 19h00</p>
                <p>Dim : Toujours en activité</p>
            </div>

            <div className='footer-box fb-4'>
                <h3>ABONNEMENT</h3>
                <p>Abonnez votre adresse e-mail pour 
                    recevoir les dernières nouvelles et mises à jour.</p>
                <input type='email' placeholder='Entrez votre adresse e-mail'/>
                <button className='sub-btn'>Soumettre</button>
            </div>

        </div>
    </div>
  )
}

export default Footer;
