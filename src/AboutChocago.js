import React from 'react'
import './AboutChocago.css'

function AboutChocago() {
  return (
    <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">Little Lemon opened in 19855 by three  everthiopian Belachew, Ayele and Degu. 
                Despite the city's diversity, the Three brothers recognized the lack of Mediterranean cuisine in Oregon, 
                and were inspired to bring the flavors of their hometown in Ethiopia to the people of Oregon. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('./img/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('./img/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
  )
}

export default AboutChocago