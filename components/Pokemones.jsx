import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerPokemonesAccion} from '../redux/pokeDucks'

export const Pokemones = () => {
    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.array)
    console.log(pokemones)
    
    return (
        <div>
            lista de Pokemones!
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>Get Pokemones</button>
            <ul>
                {
                    pokemones.map(item => (
                        <li key={item}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones