import React from 'react'
import Restauranfood from './img/restauranfood.jpg'
import './Hero.css'

function Hero() {
  return (
    <div className='grid-container'>
        {/* <div> */}
          
        <div className='grid-item'>
            <h1>Little Lemon</h1> 
            <h2>Portland</h2> 
            <p>W e are a faamily owned <br />Mediterranean restaurant,<br/>
                
                focused on traditional <br/>
                recipes served with a modern
                twist.

            </p>
            <div>
              <button type="text">Reserve a Table</button>
            </div>
        </div>
        <div className='restaur-food'>
          <img src={Restauranfood} alt="" />
        </div>
        {/* </div> */}
    </div>
  )
}

export default Hero