import React from 'react';
import '../styles/ContactUsStyles.css';
import {FaPhoneAlt,FaEnvelope,FaEnvelopeOpenText,FaMapMarkedAlt} from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className='contact-sec'>
        <div className='contact-bg'>
            <div className='contact-con'>

                <div className='left-con'>
                    <h2>Need additional information?</h2>
                

                    <span className='span-flex sf-1'>
                <FaPhoneAlt size={19}/>
                <p> +212 716-966803</p>
                </span>
                <span className='span-flex sf-2'>
                <FaEnvelope size={19}/>
                <p>mohamedamineabbaoui4@gmail.com</p>
                </span>
                 <span className='span-flex sf-2'>
                <FaMapMarkedAlt size={19}/>
                <p>Maroc,Oujda</p>
                </span>
</div>

                 <div className='right-con'>

                    <form>
                        <label>Full Name <span>*</span></label>
                        <input type='text' placeholder='Amine ABB'/>
                        <br/><br/>

                        <label>Email <span>*</span></label>
                        <input type='email' placeholder='Marwanyakuza@example.com'/>
                        <br/><br/>
                        <label>Compose text <span>*</span></label>
                        <br/><br/>
                        <textarea placeholder='Write here..'>
                        
                        </textarea>
                        <button className='cont-btn' ><FaEnvelopeOpenText/> Send message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs