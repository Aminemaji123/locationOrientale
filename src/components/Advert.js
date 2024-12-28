import React, { useState } from 'react';
import '../styles/AdvertStyles.css';
import {plane1} from '../assets/index';
import {FaTimes} from 'react-icons/fa';



const Advert = () => {

  const [click,setClickState] = useState(false);

  const adClick = () => {
    setClickState(click)
  }

  return (

    <div className='advert-section'>
        
        <div className={click ? 'advert-banner none' : 'advert-banner'}>
            <div>
            <h1>Save big with our affordable flight Travelonclick en cour de creaction </h1>
          
            </div>
            
            <img src={plane1} className='adImage'/>

            <div className='delAd'>
            <FaTimes size={25} style={{color:"#ffa500", cursor:"pointer"}} onClick={adClick}/>
            </div>
           
            
        </div>
 
  </div>
  )
}

export default Advert