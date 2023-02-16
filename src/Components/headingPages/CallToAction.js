import React from 'react'
import Restauranfood from '../../img/restauranfood.jpg'
// import './CallToAction.css'
import {Link} from 'react-router-dom'
function CallToAction() {
  return (
    <header>
    <article className="call-to-action">
            <section className="hero-text">
                <h1>Little Lemon</h1> 
                <h2>Portland</h2> 
                <p className="subsection">W e are a faamily owned  Mediterranean restaurant,
                    
                    focused on traditional 
                    recipes served with a modern
                    twist.

                </p>
                <Link className="action-button" to="/reservations">Reserve a table</Link>
                  {/* <button type="text">Reserve a Table</button> */}
                  </section>
        <div  className="hero-image">
          <img src={Restauranfood} alt="" />
        </div>
        {/* </div> */}
    </article>
    </header>
  )
}

export default CallToAction