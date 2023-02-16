import React from 'react'
import AboutChocago from '../headingPages/AboutChocago'
import CallToAction from '../headingPages/CallToAction'
import Specials from '../headingPages/Specials'
import Testimonials from '../headingPages/Testimonials'
// import './HomePage.css';

function HomePage () {
  return (
    <>
    <CallToAction />
      
        <main>
          <Specials />
          <Testimonials />
          <AboutChocago />
        </main>
  
      
       </>
  )
}

export default HomePage 