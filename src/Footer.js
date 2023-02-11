import React from 'react'
import Logo from './img/Logo.svg'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer_column'> 
         <img src={Logo} alt=""/>
         </div>
        <div className='footer_column'> 
        <ul className='list'>
                <li><h2>Doormat Navigation</h2></li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
         </div>
        <div className='footer_column'> 
        
            <ul className='list'> 
                <li><h2>Contact</h2></li>
                <li>Adress</li>
                <li>phone number</li>
                <li>email</li>
            </ul>
         </div>
        <div className='footer_column'> 
        <ul className='list'> 
                <li><h2>Social Media Links</h2></li>
                <li>Adress</li>
                <li>phone number</li>
                <li>email</li>
            </ul>
         </div>
            
      
        
    </footer>
  )
}

export default Footer