import React, { useState } from "react";
import QuizList from "./QuizList"

const quizData = [
    {   
        id: 1,
        questionText: "What does Back End Web Development refer to?",
        options: [
            {answerText: "Designing the user interface of a website", isCorrect: false},
            {answerText: "Building the server-side components of a website", isCorrect: true},
            {answerText: "Creating animations and interactive elements on a webpage", isCorrect: false},
            {answerText: "Implementing search engine optimization",isCorrect: false},
        ]
        // answer: "Building the server-side components of a website",
    },

    {
        id: 2,
        questionText: "Which of the following is NOT a programming language commonly used for Back End Web Development?",
        options: [
            {answerText: "HTML", 
            isCorrect: true},
            {answerText:  "Java", isCorrect: false},
            {answerText: "Python", isCorrect: false},
            {answerText:  "Node.js", isCorrect: false},
        ]
        // answer:  "HTML",
    },
    {
        id: 3,
        questionText: "What is the role of a back-end developer in a web development team?",
        options: [
            {answerText: "Creating visual designs for websites", isCorrect: false},
            {answerText:  "Ensuring the website is responsive on different devices", isCorrect: false},
            {answerText: "Writing code for server side functionality", isCorrect: true},
            {answerText: "Managing social media marketing campaigns", isCorrect: false},
        ]
        // answer: "Writing code for server side functionality",
    },
    {
        id: 4,
        questionText:  "What is the purpose of a database in Back End Development?",
        options: [
            {answerText: "To store and retrieve data required for the website's front-end", isCorrect: true},
            {answerText:  "To manage the website's visual layout and design", isCorrect: false},
            {answerText: "To optimize images for faster loading times", isCorrect: false},
            {answerText:  "To display advertisements on the website", isCorrect: false},
        ]
        // answer: "To store and retrieve data required for the website's front-end",
    },
    {
        id: 5,
        questionText: "What does Npm stands for?",
        options: [
            {answerText: "Node Package Mode", isCorrect: false},
            {answerText: "Node's Pack Meeting", isCorrect: false},
            {answerText: "Node Package Manager", isCorrect: true},
            {answerText: "Node Packages Management", isCorrect: false},
        ]
        // answer: "Node Package Manager",
    },
    {
        id: 6,
        questionText: "What does CSS stand for?",
        options: [
            {answerText: "Central Style Sheets", isCorrect: false},
            {answerText:  "Cascading Style Sheets", isCorrect: true},
            {answerText: "Cascading Simple Sheets", isCorrect: false},
            {answerText: "Car's SUVs Sallboats", isCorrect: false},
        ]
        // answer: "Hypertext Markup Language",
    },
    {
        id: 7,
        questionText: "What does HTML stands for?",
        options: [
            {answerText: "Hypertext Markup Language", isCorrect: true},
            {answerText: "Hypertext Markdown Language", isCorrect: false},
            {answerText: "Hyperloop Machine Language", isCorrect: false},
            {answerText:  "Helicopter's Terminals Motorboats Lamborginis", isCorrect: false},
        ]
        // answer: "Hypertext Markup Language",
    },
    {
        id: 8,
        questionText: "What year was Javascript lauched?",
        options: [
            {answerText: "1996", isCorrect: false},
            {answerText: "1995", isCorrect: true},
            {answerText: "1994", isCorrect: false},
            {answerText: "none of the  above", isCorrect: false},
        ]
        // answer: "1995",
    },
]

function Quiz() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const checkAnswer  = (option) => {
        if (option.isCorrect === true) {
            setScore(score + 1);
        }
        answers[currentQuestion] = option;  
    }
    const handleNextQuestion = (event) => {
        if(!!answers[currentQuestion]) {
            if(currentQuestion === quizData.length - 1) {
                setShowScore(true);
                return 0;
            }
            setcurrentQuestion(currentQuestion + 1)
            setSelectedIndex(null)
        }
        else {
            alert("Pick an Answer")
        }

    }
    const reset = () => {   
        setScore(0)
        setShowScore(false)
    }
    return (
        <div className="app">
            {showScore ? (
                <div className="score-section">You scored {score} out of {quizData.length}
                </div>
            ) :  (
        <>
            <div className="quiz-header">
                <h1 className="quiz-sub">Question {quizData[currentQuestion].id}/ {quizData.length}</h1>
                <div className="quiz">
                    <h1 className="question">{quizData[currentQuestion].questionText}</h1>
                    <QuizList quizData={quizData} currentQuestion={currentQuestion} checkAnswer={checkAnswer} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
                </div>
            </div>
            <button className="btn" onClick={handleNextQuestion} type="button">Next</button>
        </>
        )}
    </div>

    )
}
export default Quiz