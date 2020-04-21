import React,{useState} from 'react'
import "./Card.css"
export const Card = ({ classProp, setIDA, setIDB }) => {
    
    var [flip, setFlip] = useState(false)
    var [done, setDone] = useState(false)
    var [turn, setTurns] = useState(0) 
   
    

    function onClick() { // invoked on card click 
        if(turn === 0 || turn === 1) {
            setFlip(true)
            setTurns(++turn)
            (turn === 0) ? setIDA(classProp) : setIDB(classProp)
        }
    } 
    
    //useEffect dependices -> match -> flip; 
    // some stuff that happens involving flip 


    var classNameString = "card " + classProp

    return (

        <div className = {classNameString}>
       
        </div>
    )
}
