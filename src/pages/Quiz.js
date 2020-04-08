import React, {useState} from 'react'
import Questions from '../pageData/Quiz/QuizData';
import { AnswerList } from '../components/QuizComponents/AnswerList';
import { Question }  from '../components/QuizComponents/Question';
import { ScoreBoard } from '../components/QuizComponents/ScoreBoard';



export const Quiz = () => {
    var [ index, setIndex ] = useState(0)
    var [ result, setResult ] = useState(null)
    var gameStarted = null;

    if(result === true || result === false ) {gameStarted = true}
    const questionArray = Questions.map((question) => question.question)
    const answers = Questions.map((answer) => answer.answers)
    
    if(index === questionArray.length ) { setIndex(0)}

    // <Score = {score}/>
    // Status Bar/>
    return ( 
    
        <div>
        <ScoreBoard result={result} index={index} />
        <Question Questions={questionArray[index]}></Question>
        <AnswerList Answers={answers[index]} index={index} setIndex={setIndex} result={setResult}></AnswerList>

        </div>
    )
}
