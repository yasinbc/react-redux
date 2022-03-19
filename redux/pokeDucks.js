import axios from 'axios'


//constantes
const dataInicial = {
    array: []
}

//types
const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO"

//reducers
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, array: action.payload}
        default:
            return state
    }
}

//acciones
export const obtenerPokemonesAccion = async(dispatch, getState)=>{
    try {
        const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: respuesta.data.results
        })
    } catch (error) {
        console.log(error)        
    }
}