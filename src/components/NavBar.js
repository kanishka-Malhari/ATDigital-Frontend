import React, { useState } from 'react'
import Logo from '../assets/AT digital.JPG'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder'
import '../styles/NavBar.css'

function NavBar() {
const [openLinks, setOpenLinks] = useState(false);

const toggleNavBar = ()=> {
  setOpenLinks(!openLinks);
}

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className='hiddenLinks'>
            <Link to="/services"> Services </Link>
            <Link to="/about"> About Us </Link>
            <Link to="/contact"> Contact Us </Link>
            <Link to="/careers"> Careers </Link>
        </div>
      </div>
      
      <div className='rightSide'>

            <Link to="/services"> Services </Link>
            <Link to="/about"> About Us </Link>
            <Link to="/contact"> Contact Us </Link>
            <Link to="/careers"> Careers </Link>
            <button onClick={toggleNavBar}>
              <ReorderIcon/>
            </button>
        
        </div>
    </div>
  )
}

export default NavBar
