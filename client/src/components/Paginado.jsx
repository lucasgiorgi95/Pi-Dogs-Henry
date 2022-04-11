import React from 'react'
import './Paginado.css'

function Paginado({dogsPages, totalDogs, paginado}) {
    const numbers = []
    for (let i = 0; i <= Math.ceil(totalDogs/dogsPages)-1; i++) {
        numbers.push(i+1);
        
    }
  return (
    <>
        <nav>
            <ul>
               {
                    numbers && numbers.map(number =>{
                        return(
                            <button className='btnPaginado' onClick={()=>paginado(number)}>{number}</button>
                        )})
                }
                
            </ul>
        </nav>
    </>
  )
}

export default Paginado