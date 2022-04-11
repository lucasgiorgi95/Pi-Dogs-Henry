import React, {useEffect} from 'react'
import {getDetails} from '../redux/actions/index'
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './Detail.css'


function Details() {
    const {id}=useParams()
    const dispatch = useDispatch()
    const myDogs = useSelector((state)=>state.detail)
    console.log(myDogs)
    useEffect(()=>{
        dispatch(getDetails(id))
    },[dispatch])

  return (
    <>
            <Link to='/home'>
                <button className='btn'><span>Volver</span></button>
            </Link>
        {
         myDogs.length>0?   
            <div className='containerDetail'>
                <div className='imgContainer'>
                    <img src={myDogs[0].image} alt="Perrito" width="300px" height="250px"/>
                </div>
                <div className='textContainer'>
                    <h1>Raza:</h1>
                    <p>{myDogs[0].name}</p>
                    <h3>Espectativa de vida: {myDogs[0].life_span}</h3>
                    <p>Peso maximo:</p>
                    <p>{myDogs[0].weight_max} Kg</p>
                    <h2>Peso minimo:</h2>
                    <p> {myDogs[0].weight_min} kg</p>
                    <h3>Atura maximo: </h3>
                    <p>{myDogs[0].height_max}.cm</p>
                    <h3>Atura minima: </h3>
                    <p>{myDogs[0].height_min}.cm</p>
                    <h3>Temperament:</h3>
                    <h4>{myDogs[0].temperament}</h4>
                   
                </div>
            </div>: 
            <div>
                <h1>Loading...</h1>
                <img src="https://c.tenor.com/xzP0fkUocmsAAAAd/perrito-esperando-perrito-cute.gif" alt=""  width="300px" height="250px" />
            </div>
            
        }
    </>
  )
}

export default Details