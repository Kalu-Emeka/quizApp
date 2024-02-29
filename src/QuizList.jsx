import { useState } from "react"
import QuizItem from "./QuizItem" 

function QuizList (prop) {
    const {quizData, currentQuestion, checkAnswer, selectedIndex, setSelectedIndex, options} = prop
    return (
        <ul className="quiz-answers">
            {quizData[currentQuestion].options.map((option, index, isCorrect) =>
                <QuizItem option={option} key={index} checkAnswer={checkAnswer} currentIndex={index} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/> 
            )}
        </ul>
    )
}
export default QuizList