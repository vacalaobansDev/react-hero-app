import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';


export const HeroeList = ( { publisher } ) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher]);
    // const heroes = getHeroesByPublisher( publisher ); //Obtengo la data

    return (
        <div className="card-columns animate__fadeIn">
            {
                heroes.map( heroe => (
                    <HeroCard
                        key={heroe.id}
                        { ...heroe }  
                    />
                ))
            }
        </div>
    )
}
