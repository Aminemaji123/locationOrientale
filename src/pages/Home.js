import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Booking from '../components/Booking'
import CompIntro from '../components/CompIntro'
import VehicleTab from '../components/VehicleTab'
import Advert from '../components/Advert'
import WhyChooseUs from '../components/WhyChooseUs'
import Review from '../components/Review'
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='relative'>
        <Navbar/>
        <Hero/>
        <Booking/>
        <CompIntro/>
        <VehicleTab/>
        <Advert/>
        <WhyChooseUs/>
        <Review/>
        <Footer/>
    </div>
  )
}

export default Home