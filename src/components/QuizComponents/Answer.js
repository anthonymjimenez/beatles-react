import React from 'react'

export const Answer = ({ text, correct, result, setIndex, index}) => {
    function answerResult() {
        setIndex(index + 1)
        if(correct === true) { result(true)}

        else {result(false)}

    }
    return (
        <button onClick={answerResult}>
            {text}
        </button>
    
    )
}
