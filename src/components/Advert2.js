import React from 'react';
import {FaWhatsapp} from 'react-icons/fa';
import '../styles/Advert2Styles.css'

const Advert2 = () => {
  return (
    <div className='advert2-sec'>

        <div className='ads-box'>
            <div className='ads-det'>
            
            <h2>Get in touch on whatsapp</h2>
            <h2 className='wapp'>
                <FaWhatsapp size={50} style={{color:'var(--primary-color)'}}/>
                <span>+212 716-966803</span>
            </h2>
            </div>
        </div>

    </div>
  )
}

export default Advert2