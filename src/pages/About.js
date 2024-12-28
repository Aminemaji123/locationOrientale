import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CompIntro from '../components/CompIntro';
import AboutComp from '../components/AboutComp';
import Advert2 from '../components/Advert2';

const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutComp/>
      <CompIntro/>
      <Advert2/>
      <Footer/>
     
    </div>
  )
}

export default About