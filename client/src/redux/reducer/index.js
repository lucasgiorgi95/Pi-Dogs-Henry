import {GET_DOGS,
         FILTER_TEMPERAMENT,
         GET_TEMPERAMENT, 
         FILTER_CREATED, 
         FILTER_RAZA, 
         ORDER_AZ, 
         ORDER_WEIGHT,
         GET_NAME_DOGS,
         POST_DOG,
         GET_DETAILS_ID,
         } from '../actions'

const initialState = {dogs: [], allDog:[], temperaments:[],detail:[] }

function Reducer (state=initialState, action){
    switch (action.type) {
        case GET_DOGS:
            return{
                ...state,
                dogs: action.payload,
                allDog: action.payload
            };
        case GET_TEMPERAMENT:
             return{
               ...state,
               temperaments: action.payload
            }
        case GET_NAME_DOGS:
             return {
               ...state,
               dogs: action.payload,
             };
         case GET_DETAILS_ID:
            return{
                ...state,
                detail: action.payload
            }
        case POST_DOG:
            return{
                ...state,
            }
        case FILTER_TEMPERAMENT:
            const alltemperament = state.allDog
            const filtered =
            action.payload === 'temperament' 
            ? alltemperament 
            : alltemperament.filter((e) => e.temperament?.includes(action.payload))
            return{
               ...state,
                dogs:filtered
            }
        case FILTER_CREATED:
            const allDogs = state.allDog
            const createdFilter = action.payload === 'created'
            ? allDogs.filter(e =>e.createDb) 
            : allDogs.filter(e=>!e.createDb)
            return{
                ...state,
                dogs: action.payload === 'all'? state.dogs: createdFilter
            }
        case FILTER_RAZA:
            const allRaza = state.allDog
            const filteredRaza =
            action.payload === 'raza' 
            ? allRaza
            :allRaza.filter((e) => e.name?.includes(action.payload))
             return{
                 ...state,
                dogs:action.payload === null? state.dogs: filteredRaza
            }
        case ORDER_AZ:
            const sortArr = action.payload === 'asc'?
            state.dogs.sort(function(a, b){
                if(a.name > b.name){return 1}
                if(b.name > a.name){return -1}
                return 0
            }):
            state.dogs.sort(function(a, b){
                if(a.name > b.name){return -1}
                if(b.name > a.name){return 1}
                return 0
            })
            return{
                ...state,
                dogs: sortArr
            }
            case ORDER_WEIGHT:
                const sortWeigth = action.payload === 'weight'?
                state.dogs.sort(function(a, b){
                    if(Number(a.weight_max) > Number(b.weight_min)){return -1}
                    if(Number(b.weight_min) > Number(a.weight_max)){return 1}
                    return 0
                }):
                state.dogs.sort(function(a, b){
                    if(Number(a.weight_max) > Number(b.weight_min)){return 1}
                    if(Number(b.weight_min) > Number(a.weight_max)){return -1}
                    return 0
                })
                return{
                    ...state,
                    dogs: sortWeigth
                }    
        default:
            return state;
    }
}

export default Reducer 