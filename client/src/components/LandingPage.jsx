import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'


const LandingPage = () => {
  return (
    <>
       <div className='containerLandig'>
        <Link to='/home'>
              <button class="btnLanding-neon">
              Bienvenidos
              </button>
        </Link>
      </div> 
    </>
  )
}

export default LandingPage