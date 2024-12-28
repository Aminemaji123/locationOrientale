import React, { useState } from 'react';
import '../styles/NavbarStyles.css';
import {Link, useNavigate} from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const navigate = useNavigate();
    const [click,setClick] =  useState(false);
    const handleClick = () => setClick(!click);

    const openPage = () => {
        setClick(!click);
    }

    // Ajout des fonctions de navigation
    const handleSignIn = () => {
        navigate('/signin');
    };

    const handleRegister = () => {
        navigate('/register');
    };

  return (
    <div className='header max-w-[1920px]'>
        <ul className={click ? 'Nav-menu active' : 'Nav-menu'}>
            <li>
                <Link to="/" onClick={openPage}>Home</Link>
            </li>
            <li>
                <Link to="/about" onClick={openPage}>About</Link>
            </li>
            <li>
                <Link to="/models" onClick={openPage}>Models</Link>
            </li>
            <li>
                <Link to="/testimonials" onClick={openPage}>Testimonials</Link>
            </li>
            <li>
                <Link to="/team" onClick={openPage}>Our Team</Link>
            </li>
            <li>
                <Link to="/contact" onClick={openPage}>Contact</Link>
            </li>
        </ul>

        <div className='openNav' onClick={handleClick}>
            {click ? 
                (<FaTimes size={28} style={{ color:"#000" ,cursor:"pointer"}}/>) :
                (<FaBars size={28} style={{ color:"#000" ,cursor:"pointer"}}/>)
            }
        </div>

        <div className='nav-btns'>
            <button className='nav-btn sign-in' onClick={handleSignIn}>Sign In</button>
            <button className='nav-btn register' onClick={handleRegister}>Register</button>
        </div>
    </div>
  )
}

export default Navbar;