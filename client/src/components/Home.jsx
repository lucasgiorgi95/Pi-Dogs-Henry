import React from 'react'
import { useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getDogs, filter, getTemperament, filterCreated, filterRaza, orderAZ,orderWeight} from '../redux/actions'
import {Link} from 'react-router-dom'
import CardDog from './CardDog'
import Paginado from './Paginado'
import SearchBar from './SearchBar'
import './Home.css'


function Home() {
    const dispatch = useDispatch()
    const totalDogs = useSelector((state) => state.dogs)
    //console.log(totalDogs)
    const temps = useSelector((state) => state.temperaments)
    //console.log(temps)
    
    const [order, setOrder] = useState('')
    const [created, setCreated] = useState('')
    const [raza, setRaza] = useState('')
    const [orders, setOrders] = useState('')
    const [weigth, setWeigth] = useState('')

    const [page, setPage] = useState(1)
    const [dogsPages, setDogsPages] = useState(8)
    const lastDog = page * dogsPages
    const firstDog = lastDog - dogsPages
    const currentDogs = totalDogs.slice(firstDog,lastDog)
    const paginado = (pageNumber) =>{setPage(pageNumber)}

    useEffect(()=>{
      dispatch(getDogs())
  },[dispatch])

    useEffect(()=>{
      dispatch(getTemperament())
  },[dispatch])



  function handleClick(e){
      e.preventDefault();
      dispatch(getDogs())
  }

  function handleFilter(e){
    e.preventDefault()
    dispatch(filter(e.target.value))
    setPage(1)
    setOrder(e.target.value)
  }

  function handleFilterCreated(e){
    e.preventDefault()
     dispatch(filterCreated(e.target.value))
    setPage(1)
    setCreated(e.target.value)
  }

  function handleFilterRaza(e){
    e.preventDefault()
    dispatch(filterRaza(e.target.value))
    setPage(1)
    setRaza(e.target.value)
  }
  function handleSort(e){
    e.preventDefault()
    dispatch(orderAZ(e.target.value))
    setPage(1)
    setOrders(e.target.value)
  }
  function handleSortWeigth(e){
    e.preventDefault()
    dispatch(orderWeight(e.target.value))
    setPage(1)
    setWeigth(e.target.value)
  }
  

  return (
    <>  
      
      <div className='containerHome'>  
      <Link to= {'/dog'}> <button className='btnHome'><span>Create dog</span></button></Link>
      <button className='btnHome' onClick={e=>{handleClick(e)}}><span>Reload</span></button>
        <select className='btnHome' onChange={(e)=>handleFilter(e)}>
          <option value="temperament">Temperament</option>
          {temps?.map((t) => (<option value={t.name} key={t.id}>{t.name}</option>))}
        </select>
        <select className='btnHome' onChange={(e)=>handleFilterRaza(e)}>
          <option value="raza">Race</option>
          {totalDogs?.map((t) => (<option value={t.name} key={t.id}>{t.name}</option>))}
        </select>
        <select className='btnHome' onChange={e=>handleSort(e)}>
        <option value="">Alphabet</option>
          <option value="asc">AZ</option>
          <option value="desc">ZA</option>
        </select>
        <select className='btnHome' onChange={e=>handleSortWeigth(e)}>
          <option value="">Weight</option>
          <option value="weight">Heavy</option>
          <option value="weight_min">Lightweight</option>
        </select>
        <SearchBar/> 
      </div>
      <Paginado dogsPages={dogsPages} totalDogs ={totalDogs.length} paginado={paginado}/>
      <div className='containerCard'> 
        {currentDogs?.map((e) =>{return(
          <div >
          <Link  to ={`/dogs/${e.id}`} >
          <CardDog  name={e.name} image={e.image} temperament={e.temperament} life_span={e.life_span} weight_max={e.weight_max}/>
          </Link>
          </div>
         )})
        }
       </div>
    </>
  )
}

export default Home