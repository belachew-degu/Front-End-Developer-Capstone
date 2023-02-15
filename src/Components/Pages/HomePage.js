import React from 'react'
import AboutChocago from '../../AboutChocago'
import CallToAction from '../headingPages/CallToAction'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import Specials from '../headingPages/Specials'
import Testimonials from '../headingPages/Testimonials'
import './HomePage.css';

function HomePage () {
  return (
    <>
    <CallToAction />
      {/* <Navbar /> */}
        {/* <CallToAction /> */}
        <Specials />
        <Testimonials />
        <AboutChocago />
        {/* <Footer />  */}
      
       </>
  )
}

export default HomePage 