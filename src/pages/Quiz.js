import React, {useState, useRef} from 'react'
import Questions from '../pageData/Quiz/QuizData';
import { AnswerList } from '../components/QuizComponents/AnswerList';
import { Question }  from '../components/QuizComponents/Question';



export const Quiz = () => {
    var [ index, setIndex ] = useState(0)
    var [ result, setResult ] = useState(null)
    var gameStarted = null;

    if(result === true || result === false ) {gameStarted = true}

    const questionArray = Questions.map((question) => question.question)
    const answers = Questions.map((answer) => answer.answers)


    // <Score = {score}/>
    // Status Bar/>
    return ( 
    
        <div>
        {(gameStarted) ? ((result) ? <p>You were right</p>: <p>You were wrong</p>) : <p>Enjoy the quiz</p>}
        <Question Questions={questionArray} index = {index}></Question>
        <AnswerList Answers={answers} index={index} setIndex={setIndex} result={setResult}></AnswerList>

        </div>
    )
}
