// start with a score of 0
var score = 0;

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const startPage = document.getElementsByClassName('start-page')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

function startGame() {
    startButton.classList.add('hide')
    startPage[0].classList.add('hide')
    startPage[1].classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }   
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: "Pick the option that ISN'T a way to see JavaScript results.",
        answers: [
            { text: 'console.log("Hello World!");', correct: false},
            { text: 'document.write("Hello World!);', correct: false},
            { text: 'helloWorld()', correct: true},
            { text: 'alert("Hello World")', correct: false}
        ]
    },
    {
        question: "number values in JavaScript can't be...",
        answers: [
            { text: 'decimals', correct: false},
            { text: 'negative', correct: false},
            { text: 'integers', correct: false},
            { text: 'letters', correct: true}
        ]
    },
    {
        question: "A boolean value can only have 1 of 2 values. They are ...",
        answers: [
            { text: 'correct or incorrect', correct: false},
            { text: 'true or false', correct: true},
            { text: 'T or F', correct: false},
            { text: 'right or wrong', correct: false}
        ]
    },
    {
        question: "A string in javaScript is ...",
        answers: [
            { text: 'A collection of characters', correct: true},
            { text: 'A collection of numbers', correct: false},
            { text: 'Any collection of values', correct: false},
            { text: 'by default a randomized bunch of letters', correct: false}
        ]
    },
    {
        question: "Pick the option that ISN'T a functional array. Pay close attention to the syntax.",
        answers: [
            { text: '["apples","oranges","tomatoes"]', correct: false},
            { text: '[1,2,3,7,8,9,22]', correct: false},
            { text: '[true, false]', correct: true},
            { text: '["cat","dog","mouse"]', correct: false}
        ]
    }

]

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})