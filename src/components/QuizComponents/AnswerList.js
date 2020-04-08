import React from 'react'
import { Answer } from './Answer'

export const AnswerList = ({ Answers , index, result, setIndex }) => {
    return (
        <>
        {Answers.map((answer) =>
         <Answer index={index} 
                text={answer.text} 
                correct ={answer.correct} 
                setIndex={setIndex} 
                result={result}
                    
                />)}
       </> 
    )
}
