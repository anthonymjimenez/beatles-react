import React, { useState, useEffect } from 'react'

export const ScoreBoard = ({ result, index }) => {
    const [total, setTotal] = useState(0)
    const [right, setRight] = useState(0)
    
    useEffect(() => {
        if(result === true ) { 
            setRight(right + 1)
            setTotal(total + 1)

        }
        if(result === false) {
            setTotal(total + 1)
        }
  
    }, [index]);

    const score = right / total
    return (
        <>
        <div>{right}</div>
        <div>{total}</div>
       {(score) ? <div>{score}</div> : (<div> Enjoy ur game </div>)}
        </>
    )

    
    }