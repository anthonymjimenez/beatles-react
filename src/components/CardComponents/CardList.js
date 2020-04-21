import React, { useState, useEffect } from 'react'
import { Card } from './Card'
import "./Card.css"
    // setTurns 

export const CardList = ({ image }) => {
    
    var [score, setScore] = useState(0)
    var [setIDA, idA] = useState('')
    var [setIDB, idB] = useState('')
    var [match, setMatch] = useState(false) // only prop needs to be drilled 
                                            // .. ?? 
    // setCardID A
    // setCardIB B
    // when correct -> setMatch(a depency in Card.js that determine cards visibility)
    // when correct -> setScore(a dependcny in CardMatch.js that determine when game)
    // useEffect -> dependent on changes to turn !! runs when turn == 2 
    // CardIDA = CardIDB => correct ans logic => next time create a console.log that prints
    // out when a succesful match has happpened and increments
    // else -> nothing happens 
    return (
        <>
        {image.map((classname) =>
         <Card 
            classProp = {classname}
                />)}
       </> 
    )
}
