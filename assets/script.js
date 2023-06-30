//what variables do we need to make this run?
var quizQuestion = document.getElementById("quizQuest");
var quizOptions = document.getElementById("options");
var userChoice = document.getElementById("userSelection")
var choiceA = document.getElementById("a")
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var points = 0;
var questionIndex = 0;

// All variables needed to run 
var welcome = document.querySelector("main")
var restart = document.querySelector(".restart-button")
var score = document.getElementById("userScore")
var endofGame = document.getElementById("endofGame")
var count = 60;
var intervalId
var finalScore = document.getElementById("finalScore")
main.style = ("display: none;")
endofGame.style = ("display: none;")

// build a question bank
var questions = [
    {
        question: "What does HTML stand for?",
        a: "Hot Text Markup Link",
        b: "How To Markup Language",
        c: "Hypertext Markup Language",
        d: "Hypertext Makeup Language",
        correct: "c",
    },
    
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheet",
        b: "Coding Style Sheet",
        c: "Cascading Sheet Style",
        d: "Cool Style Sheet",
        correct: "a",
    },
    
    {
        question: "What do we use to make a website interactive?",
        a: "Script",
        b: "Coffee",
        c: "Java",
        d: "JavaScript",
        correct: "d",
    },
    
    {
        question: "What are the primative types",
        a: "Boolean, String, Number, Button",
        b: "String, Number, Boolean, Undefined",
        c: "Logic, Math, Random, Comparison",
        d: "None of the above",
        correct: "b",
    },
];

// show the quiz 
// function startQuiz (){
//     //event listener 
//     // display the quiz question
//     displayQuestions()
//     // start a timer
// };

function displayQuestions (){
      quizQuestion.textContent = questions[questionIndex].question;
      choiceA.textContent = questions[questionIndex].a
      choiceB.textContent = questions[questionIndex].b;
      choiceC.textContent = questions[questionIndex].c;
      choiceD.textContent = questions[questionIndex].d;
}

quizOptions.addEventListener('click', handleAnswerButtonClick)

function handleAnswerButtonClick(event){
        //if the user clicks a button
        if(event.target.matches(".btn")){
            if(event.target.id === questions[questionIndex].correct){
            userChoice.innerText = "Correct!"
            score.innerText = points += 5
        }
        else {
            userChoice.innerText = "Incorrect"
            score.innerText = points -= 1
            count = count -2
        }
        localStorage.setItem("totalPoints", score.innerText)
        questionIndex++
        checkTimesUp()
        if (questionIndex >= questionIndex.length){
            getScore()
            clearInterval(intervalId)
            timer.innerText = "Good work! Want to play again?"
            para.stye = ("dispaly: none;")
        } else {
            displayQuestions()
        }
    }
 }

function checkTimesUp() {
    if (count === 0) {
        getScore()
        finalScore.innerText = "You lose. Try again?"
    }
}

// final score card display
function getScore(){
    var totalScore= localStorage.getItem("totalPoints")
    finalScore.innerText = totalScore
    main.style = ("display: nonel")
    endofGame.style = ("display: block;")
}

//Quiz Start Button
start.onclick = function(){
    displayQuestions()
    timer.innerText = "Begin!"

    intervalId = setInvertal(function() {
        count--
        timer.innerText= count
        if (count <= 0) {
            clearInterval(intervalId)
            timer.innerText = "Time is up!"
        }
        checkTimesUp()
    }, 1000)
    main.style = "display: block;"
    welcome.style = "display: none;"
}
// Stuff to look into: localStorage, addEventListnener, Conditional Statements (If/Else), Event.target; 