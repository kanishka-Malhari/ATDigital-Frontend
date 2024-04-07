import React from 'react'
import '../styles/Home.css'
import banner from '../assets/banner.jpg';
import desktop from '../assets/desktop.png'
import searchIcon from '../assets/searchIcon.png'
import FAQ from '../components/FAQ'

function Home() {
  return (
    <div className='home' >

      <div className='home-header' style={{backgroundImage: `url("${banner}")`}}>

<div className='description' style={{backgroundImage: "linear-gradient(to right, #1CBDDD, #4DCA79)" }}>

<h1>We Crush Your <br/> Competitors, Goals, And <br/> Sales Records - Without <br/> The B.S.</h1>
<button>GET FREE CONSULTATION</button>
</div>

      </div>
      

      <div className='part1'>
        <img src={desktop}/>
        <div className='details'>

          <h1>Web & Mobile App Development</h1>
        <p>Your web and mobile Apps are pieces of the puzzle to grow your <br/>
        business. We use frameworks which tailor content and engagement <br/>
        methods to respond to different intents shown by your potential <br/>
        customers who interact with your business online.</p>
        <button>LEARN MORE</button>

        </div>
        
              </div>
      <div className='part2'>
      
        <div className='details'>

          <h1>Digital Strategy Consulting</h1>
        <p>Your digital strategy should complement the overall marketing strategy <br/>
         of the company. In online marketing, each component will never work in <br/>
         isolation and every business needs a different mix. We provide a clear <br/>
         concept and strategic overview to find the most efficient model for <br/>
         your business.</p>
        <button>LEARN MORE</button>

        </div>
        <img src={searchIcon}/>

      </div>

      <div className='FAQ'>
      <FAQ/>
      </div>
      
      
     
    </div>
  )
}

export default Home
