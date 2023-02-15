import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './img/nav-logo.png'
import './Navigation.css'
function Navigation(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}> 
        {/* <div className='header_class'> */}
        {props.device === "mobile" ? (
        ""
      ) : (
        <Link to="/">
          <img
            src={require("./img/nav-logo.png")}
            alt="Little Lemon logo"
            className="nav-image"
          ></img>
        </Link>
      )}
            <Link to="/" className="hover-effect">
            <h1>Home</h1>
            </Link>
            <Link to="/about"  className="hover-effect"><h1>About</h1></Link>
            <a
         
        className="hover-effect"
        href={require("../src/img/menu.webp")}
        target="_blank"
        rel="noreferrer"
      >
        <h1>Menu</h1>
      </a>
            {/* <Link to="/menu" className="hover-effect"><h1>Menu</h1></Link> */}
            <Link to="/reservations" className="hover-effect"><h1>Reservations</h1></Link>
            <Link to="/orderonline" className="hover-effect"> <h1>Order</h1></Link>
            <Link to="/login" className="hover-effect"> <h1>Login</h1></Link>

        {/* </div> */}
    </menu>
  )
}

export default Navigation