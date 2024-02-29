import { useState } from "react"
function QuizItem (prop) {
    const {option, currentIndex, selectedIndex, setSelectedIndex, checkAnswer} = prop
    return (
        <li>
            <button className={`answers ${selectedIndex === currentIndex ? 'selected' : 'unselected'}`} onClick={() => {
                checkAnswer(option)
                setSelectedIndex(currentIndex) 
            }} type="button">{option.answerText}</button> 
        </li>
    )
}
export default QuizItem