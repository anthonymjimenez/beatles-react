import React, {useState} from 'react'
import Questions from '../pageData/Quiz/QuizData';
import { AnswerList } from '../components/QuizComponents/AnswerList';
import { Question }  from '../components/QuizComponents/Question';



export const Quiz = () => {
    var [ index, setIndex ] = useState(0)
    var [ result, setResult ] = useState(false)
    console.log(result)
    const questionArray = Questions.map((question) => question.question)
    const answers = Questions.map((answer) => answer.answers)
    

    // <Score = {score}/>
    // Status Bar/>
    return ( 
    
        <div>
        {(result) ? <p>You were right</p>: <p>You were wrong</p>}
        <Question Questions={questionArray} index = {index}></Question>
        <AnswerList Answers={answers} index={index} setIndex={setIndex} result={setResult}></AnswerList>
        
        </div>
    )
}
