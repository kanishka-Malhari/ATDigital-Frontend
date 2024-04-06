import React from 'react'
import logo from '../assets/AT digital.JPG'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
        <img src={logo}/>

        </div>

        <div className='rightSide'>
            
            <Link to="/services"> Services </Link>
            <Link to="/about"> About Us </Link>
            <Link to="/contact"> Contact Us </Link>
            <Link to="/careers"> Careers </Link>

        </div>
      
    </div>
  )
}

export default NavBar
