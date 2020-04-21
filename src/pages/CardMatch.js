import React from 'react'
import { CardList } from '../components/CardComponents/CardList'
import ImageArr from '../pageData/cardMatch/ImageData';
export const CardMatch = () => {
    
    // ImageArr to render each card 2 
    // if matches == 8 game is over !! you win
    // if time == 0 game is over !! you lose 
    return (
        <>
            <CardList image = {ImageArr}/>
    
        </>
    )
}

