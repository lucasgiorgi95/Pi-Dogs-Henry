
import React from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getDetails} from '../redux/actions/index'
import { useEffect } from 'react';
import"./Detail.css";
export default function Detail(){
 
  // const navigate = useNavigate()
  var myDogs = useSelector(state => state.detail);
  console.log(myDogs)
  const dispatch = useDispatch();
  
  const{id} = useParams();
  
  useEffect(() => {
      dispatch(getDetails(id));
      console.log(myDogs)
  }
  , [dispatch]);

return (
  <div>
          <Link to='/home'> <button className='btn'><span>Volver</span></button></Link>
      {
       myDogs.length> 0 ?   
          <div className='containerDetail'>
              <div className='imgContainer'>
                  <img src={myDogs[0].image} alt="Perrito" width="300px" height="250px"/>
              </div>
              <div >
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
              <div >
              <h1>Raza:</h1>
              <p>{myDogs?.name}</p>
              <h3>Espectativa de vida: {myDogs?.life_span}</h3>
              <p>Peso maximo:</p>
              <p>{myDogs?.weight_max} Kg</p>
              <h2>Peso minimo:</h2>
              <p> {myDogs?.weight_min} kg</p>
              <h3>Atura maximo: </h3>
              <p>{myDogs?.height_max}.cm</p>
              <h3>Atura minima: </h3>
              <p>{myDogs?.height_min}.cm</p>
              <h3>Temperament:</h3>
              <h4>{myDogs?.temperament}</h4>
              </div>
            
          } 
          

          
          </div>


)}