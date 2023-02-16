import React,{ useState } from 'react'
import Navigation from "./Navigation";
// import './Navbar.css'
import Hamburger from "./img/hamburger.png";
import Close from "./img/close.png";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav>
      <nav className="burger">
        <img
          src={require("./img/nav-logo.png")}
          alt="Little Lemon logo"
          className="nav-image"
        ></img>

        <button className="burger-icon" onClick={handleToggle}>
          <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
        </button>
      </nav>
      <Navigation device="desktop" />
      {navbarOpen ? <Navigation device="mobile" /> : ""}
    </nav>
  )
}

export default Navbar