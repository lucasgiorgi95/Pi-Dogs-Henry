import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'


const LandingPage = () => {
  return (
    <>
       <div className='containerLandig'>
        <Link to='/home'>
            <a href="#" class="btnLanding-neon">
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
        Bienvenidos
    </a>
        </Link>
      </div> 
    </>
  )
}

export default LandingPage