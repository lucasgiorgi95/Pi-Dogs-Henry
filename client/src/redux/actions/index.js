import axios from 'axios'

export const GET_DOGS = 'GET_DOGS'
export function getDogs(){
    return async function(dispatch){
        const json = await axios.get('http://localhost:3001/dogs')
        return dispatch({type:GET_DOGS , payload: json.data,})
    }
}
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT'
export function getTemperament(){
    return async function(dispatch){
        const temp = await axios.get('http://localhost:3001/temperament')
        return dispatch({type:GET_TEMPERAMENT , payload: temp.data,})
    }
}
export const POST_DOG = 'POST_DOG'
export function postDog(payload){
    return async function(dispatch){
        const json = await axios.post('http://localhost:3001/dog',payload)
        return json
    }
}
export const GET_NAME_DOGS ='GET_NAME_DOGS'
export function getNameDogs(name){
    return async function(dispatch){
        try{
            const json = await axios.get('http://localhost:3001/dogs?name=' + name)
        return dispatch({type:GET_NAME_DOGS , payload: json.data,})
        }catch(error){
            console.log(error)
        }
        
    }
}
export const GET_DETAILS_ID ='GET_DETAILS_ID'
export function getDetails(id){
    return async function(dispatch){
        try{
            const json = await axios.get(`http://localhost:3001/dogs/${id}`  )
        return dispatch({type:GET_DETAILS_ID , payload: json.data,})
        }catch(error){
            console.log(error)
        }   
    }
}
export const FILTER_TEMPERAMENT = 'FILTER_TEPERAMENT'
export function filter(payload){
    return{
        type: FILTER_TEMPERAMENT,
        payload,
    };
}
export const FILTER_CREATED = 'FILTER_CREATED'
export function filterCreated(payload){
    return{
        type: FILTER_CREATED,
        payload,
    };
}
export const FILTER_RAZA = 'FILTER_RAZA'
export function filterRaza(payload){
    return{
        type: FILTER_RAZA,
        payload,
    };
}
export const ORDER_AZ = 'ORDER_AZ'
export function orderAZ(payload){
    return{
        type: ORDER_AZ,
        payload,
    };
}
export const ORDER_WEIGHT = 'ORDER_WEIGHT'
export function orderWeight(payload){
    return{
        type: ORDER_WEIGHT,
        payload,
    };
}