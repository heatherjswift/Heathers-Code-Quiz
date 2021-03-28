// start with a score of 0
var score = 0;

let startButton = document.getElementById("start-btn")
let startPage = document.getElementsByClassName("start-page")

console.log()

function startGame() {
    console.log("Started")
    startButton.classList.add('hide')
    startPage[0].classList.add('hide')
    startPage[1].classList.add('hide')
    setNextQuestion()
}

function setNextQuestion () {

}

function selectAnswer() {

}

startButton.addEventListener('click', startGame)