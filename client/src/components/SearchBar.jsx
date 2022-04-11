import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {getNameDogs} from '../redux/actions/index'
import './SearchBar.css'

function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInput(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(handleInput)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameDogs(name))
    }
  return (
    <>
    <div>
    <button className='btnSearch' type='submit' onClick={(e)=>handleSubmit(e)}><span>Buscar</span></button>
        <input className='inputBar' type="text" 
        placeholder='Buscar...' 
        onChange={(e)=>handleInput(e)}/>
    </div>
    </>
  )
}

export default SearchBar