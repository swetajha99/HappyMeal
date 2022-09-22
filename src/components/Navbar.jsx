import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import '../App.css';
function Navbar() {
  return (
    <div>
  <nav className='navbar'>
  <div className='nav-center'>
    <Link to="/">
        <img src={logo}  alt="happyMeal" className='logo'/>
    </Link>
    <ul className='nav-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
    </ul>
  </div>
  </nav>
    </div>
  )
}

export default Navbar
