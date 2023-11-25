const quizData = [
    {
        question: "What does Back End Web Development refer to?",
        a: "Designing the user interface of a website",
        b: "Building the server-side components of a website",
        c: "Creating animations and interactive elements on a webpage",
        d: "Implementing search egine optimization",
        correct: "b",
    },

    {
        question: "Which of the following is NOT a programming language commonly used for Back End Web Development?",
        a: "HTML",
        b: "Java",
        c: "Python",
        d: "Node.js",
        correct: "a",
    },
    {
        question: "What is the role of a back-end developer in a web development team?",
        a: "Creating visual designs for websites",
        b: "Ensuring the website is responsive on different devices",
        c: "Writing code for server side functionality",
        d: "Managing social media marketing campaigns",
        correct: "c",
    },
    {
        question: "What is the purpose of a database in Back End Development?",
        a: "To store and retrieve data required for the website's front-end",
        b: "To manage the website's visual layout and design",
        c: "To optimize images for faster loading times",
        d: "To display advertisements on the website",
        correct: "a",
    },
    {
        question: "What does Npm stands for?",
        a: "Node Package Mode",
        b: "Node's Pack Meeting",
        c: "Node Package Manager",
        d: "Node Packages Management",
        correct: "c",
    },

    {
        question: "What is IIFEs?",
        a: "Intermediate Invoked Federal Expression",
        b: "Immediately-Invoked Functions Expression",
        c: "IIFEs is a function that stands alone",
        d: "Justify all function and assign them immediately",
        correct: "c"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Car's SUVs Sallboats",
        correct: "b"
    },
    {
        question: "What does HTML stands for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopter's Terminals Motorboats Lamborginis",
        correct: "a"
    },
    {
        question: "What year was Javascript lauched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the  above",
        correct: "b"
    },
    
];
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitEl = document.getElementById("submit")

let currentQuiz = 0;
let score = 0

let deselectAnswers =  ()=>  {
    answerEls.forEach(answer => answer.checked = false);
}
let getSelected = ()=> {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        } 
    });
    return answer;
}
let loadQuiz = () => {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
loadQuiz();

submitEl.addEventListener("click", ()=> {
        const answer = getSelected();
        if (answer) {
            if (answer === quizData[currentQuiz].correct) {
                score++;
            }
        }
        currentQuiz++
    
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
          quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} question correctly </h2>
            <button onclick="location.reload()">Reload</button>
          `  
        }
})
