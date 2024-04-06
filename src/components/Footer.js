import React from 'react'
import logo from '../assets/AT digital.JPG'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'> 
    <div className='upSide'>
    <div className='leftSide'>
    <img src={logo}/>
    <p>Your goal is our target. Not anything in between. We use <br/>
     online marketing platform and tools to achieve single<br/>  
     objective your business results.</p>

      </div> 
    <div className='middle'>
      <h2>Our Technologies</h2>
      <p>ReactJS</p>
      <p>Gatsby</p>
      <p>NextJS</p>
      <p>NodeJS</p>
      </div> 
    <div className='rightSide'>
    <h2>Our Services</h2>
      <p>Social media marketing</p>
      <p>Web & Mobile App <br/>Development</p>
      <p>Data & Analytics</p>
      </div> 
    </div>
    

      <div className='downside'>
<hr/>
<p>Privacy Policy   |   Terms and Conditions</p>
      </div>

    </div>
  )
}

export default Footer
