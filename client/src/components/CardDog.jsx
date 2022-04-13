import React from 'react'
import './CardDog.css'

function CardDog({name, image, life_span, temperament,weight_max}) {
  return (
    <>
      <div className='containerCard'>

          <div className='card'>
            <img className='img' src={image} alt="supuestamente soy un perro"/>
            <h3>Nombre:</h3>
            <p> {name}</p>
            <h3>Espectativa de vida:</h3>
            <p>{life_span}</p>
            <h3>Peso:</h3>
            <p>{weight_max}kg</p>
            <h3>Temperamento:</h3>
            <p>{temperament}</p> 
          </div>
          
      </div>
    </>
  )
}

export default CardDog