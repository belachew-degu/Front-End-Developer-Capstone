import React from 'react'
import Logo from './img/footer-logo.png'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <div className='img-footer'> 
         <img src={Logo} alt=""/>
         </div>
        <div className='footer_column'>
        <h1>Navigation</h1> 
        <ul className='footer_list'>
                 <li><Link to="/" className='footer_item' >Home</Link></li><br></br>
                 <li><Link to="/about" className='footer_item'>About</Link></li><br></br>
                 <li><Link to="/menu" className='footer_item'>Menu</Link></li><br></br>
                 <li><Link to="/reservation" className='footer_item'>Reservations</Link></li><br></br>
                 <li><Link to="/orderonline" className='footer_item'>Order Online</Link></li><br></br>
                 <li><Link to="/login" className='footer_item'>Login</Link></li>
            </ul>
         </div>
        <div className='footer_column'> 
        
        <h1>Contact</h1>
          <ul className="footer_list">
            <li className='footer_item' >5241 startk Way,</li>
            <li className='footer_item' >Oregon Portland</li>
            <br></br>
            <li className='footer_item' >(503)-000-0000</li>
            <br></br>
            <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"

              className='footer_item' 
            >
              information@littlelemon.com
            </a>
          </ul>
         </div>
        <div className='footer_column'> 
        <h1>Social Media Links</h1>
        <ul className="footer_list"> 
        
                <li className='footer_item'>
                <a
              href="https://www.facebook.com/thelittlelemonshop/"
              target="_blank"
              rel="noreferrer"
              
            >
              Facebook
            </a>
                </li>
                <br></br>
                <li className='footer_item'>
                <Link
              href="https://www.instagram.com/littlelemonmoon/"
              target="_blank"
              rel="noreferrer"
              
            >
              Instagram
            </Link>
                </li>
                <br></br>
                <li  className='footer_item'><Link
              href="https://www.youtube.com/watch?v=3Li-FfypZYE"
              target="_blank"
              rel="noreferrer"
            
            >
              Join us!
            </Link></li>
            </ul>
         </div>
            
      
        
    </footer>
  )
}

export default Footer