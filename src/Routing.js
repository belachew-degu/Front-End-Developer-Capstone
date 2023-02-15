import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from './Components/Pages/About';
import HomePage from './Components/Pages/HomePage';
import Order from './Components/Pages/Order';
import Login from "./Components/Pages/Login";
import Confirmation from "./Components/Pages/Confirmation";
import Reservation from "./Components/Pages/BookingPage";
function Routing() {
  return (
    <Routes> 
    <Route path="/" element={<HomePage/>}></Route>
    {/* <Route path="/booking" element={<BookingPage />}></Route> */}
    <Route path="/about" element={<About />}></Route>
    {/* <Route path="/menu" element={<Menu/>}></Route> */}
    <Route path="/reservations" element={<Reservation/>}></Route>
    <Route path="/order" element={<Order/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/confirmation" element={<Confirmation/>}></Route>  
    </Routes>
  )
}

export default Routing