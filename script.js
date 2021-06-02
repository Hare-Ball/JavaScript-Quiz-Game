const startButton = document.getElementById('start-button')
const saveButton = document.getElementById('save-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)

function startGame() {
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion(let i = 0; i < questions.length; i++) {
    console.log(arr[i]);
  }

function showQuestion(question) {
 




const questions = [
  {
    question: "What is a prompt?",
    answers: [
      {text: "a function that asks a question", correct: false},
      {text: "an array that must be confirmed", correct: false},
      {text: "an alert that requires no action", correct: false},
      {text: "a method asking for input", correct: true}
    ]
  },
  {
    question: "Where should you put your linked JavaScript in the HTML?",
    answers: [
      {text: "outside the script tag", correct: false},
      {text: "at the end of your HTML", correct: true},
      {text: "in the head of the HTML", correct: false},
      {text: "at the top of the HTML body", correct: false}
    ]
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      {text: "function.myFunction()", correct: false},
      {text: "function myFunction[]", correct: false},
      {text: "function:myFunction", correct: false},
      {text: "function myFunction()", correct: true}
    ],
      
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answers:  [
        {text: "//comment", correct: true},
        {text: "[comment]", correct: false},
        {text: "<!--comment-->", correct: false},
        {text: "/*comment*/", correct: false}
    ],
  }
]