import React from 'react'
import './CardDog.css'

function CardDog({name, image, life_span, temperament,weight_max}) {
  return (
    <>
      <div className='containerCard'>

          <div className='card'>
            <img className='img' src={image} alt="supuestamente soy un perro"/>
            <h3>Name: {name}</h3>
            <h3>Life span: {life_span}</h3>
            <h3>Weight: {weight_max}kg</h3>
            <h3>Temperament:</h3>
            {temperament}
          </div>
          
      </div>
    </>
  )
}

export default CardDog