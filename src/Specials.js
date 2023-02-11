import React from 'react'
import './Specials.css'
import Lemondessert from './img/lemon dessert.jpg'
import Greeksalad from './img/greeksalad.jpg'
import Bruchetta from './img/bruchetta.svg'

function Specials() {
  return (
    <div>
        <div className='top-specialist'>
            <div className='headerspecialis'><h1>This Weeks Specials</h1></div>
            <div className='onlinebutton'><button>Online Menu</button></div>
        </div>
        <div className='row'>
            <div className='column'><img src={Greeksalad} alt =""
            
            />
            <div>
            <h2>Greek salad <span>$12.99</span></h2>
            <p>
            The famous greek salad of <br/>
             crispy lettuce, peppers, olives<br/>
              and our Chicago style feta <br/>
              cheese, garnished with<br/>
               crunchy garlic and rosemary <br/>
               croutons. 
            </p>
            <h2>Order a delivery ⚜️</h2>
            </div>
            </div>
            <div className='column'><img src={Bruchetta} alt ="" />
            <div>
            <h2>Bruchetta <span>$5.99</span></h2>
            <p>
            Our Bruschetta is made from <br/>
            grilled bread that has been<br/>
             smeared with garlic and <br/>
             seasoned with salt and olive oil. 
             <br></br>
             <br></br>
             <br></br>
            </p>
            <h2>Order a delivery ⚜️</h2>
            </div>
            </div>
            <div className='column'><img src={Lemondessert} alt =""/>
               
            <div>
            <h2>Lemon Dessert <span>$5.00</span></h2>
            <p>
            This comes straight from <br/>
            grandma’s recipe book, every<br/>
             last ingredient has been<br/>
              sourced and is as authentic<br/>
               as can be imagined.


               <br></br>
               <br></br>
            </p>

            <h2>Order a delivery ⚜️</h2>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Specials