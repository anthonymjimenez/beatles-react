import React from 'react'
import { Answer } from './Answer'

export const AnswerList = ({ Answers , index, result, setIndex }) => {
    var currentAnswers = Answers[index]
    return (
        <>
        {currentAnswers.map((answer) =>
         <Answer index={index} 
                text={answer.text} 
                correct ={answer.correct} 
                setIndex={setIndex} 
                result={result}
                    
                />)}
       </> 
    )
}
