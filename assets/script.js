//what variables do we need to make this run?
var quizQuestion = document.getElementById("quizQuest");
var quizOptions = document.getElementById("options");
var userChoice = document.getElementById("userSelection")
var choiceA = document.getElementById("a")
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");

// press start button 
var startBtn = document.querySelector(".start-button")

// start timer

// build a question bank
var questionIndex = 0;

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
// do this over and over 

// show the quiz 
function startQuiz (){
    //event listener 
    // display the quiz question
    displayQuestions()
    // start a timer
};

function displayQuestions (){
    //all of the functionality for displaying quesitons
    //we make it a separate function so we can call this function multiple times
    //we know we are going to use the question array multipe times and that is why we do this
      quizQuestion.textContent = questions[questionIndex].question;

      choiceA.textContent = questions[questionIndex].a
      choiceB.textContent = questions[questionIndex].b;
      choiceC.textContent = questions[questionIndex].c;
      choiceD.textContent = questions[questionIndex].d;
}

// Right or wrong function 
function checkAnswer(event){
    console.log(event.target.id)
    if(event.target.id != questions[questionIndex].correct) {
        //deduct time
        console.log('incorrect');
    } 
    questionIndex++
    if (questionIndex === 4) {
        //end screen
        console.log("Quiz Finished!")
    }
    else {
        displayQuestions();
    }
}

// remove time for incorrect answers

// end quiz

// end highscore & initials


// locally store initials & score
//score is the time itself rather than a number


//if you do startQuiz() instead of startQuiz, it will start the function right away
startBtn.addEventListener('click', startQuiz);

quizOptions.addEventListener('click', function(event) {
    checkAnswer(event);
})

//