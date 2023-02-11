import React from 'react'
import Logo from './img/Logo.svg'
import './Header.css'
function Header() {
  return (
    <div className='header'> 
        {/* <div className='header_class'> */}
            <div className='header_column'><img src={Logo} alt="#" /></div>
            <div className='header_column'>Home</div>
            <div className='header_column'>About</div>
            <div className='header_column'>Menu</div>
            <div className='header_column'>Reservations</div>
            <div className='header_column' >Order Online</div>
            <div className='header_column'>Login</div>

        {/* </div> */}
    </div>
  )
}

export default Header