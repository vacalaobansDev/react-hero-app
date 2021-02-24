import React from 'react'
import { heroes } from '../data/heroes'

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['Dc Comics','Marvel Comics'];

    if( !validPublishers.includes( publisher ) ){
        console.log(`Publisher "${ publisher }" no es correcto.`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher ) ; //Devuelvo un array filtrado solo con las coincidencias.
}
