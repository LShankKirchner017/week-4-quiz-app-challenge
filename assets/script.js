// this would be the object for storing the questions

var questions = [
    {
        question: "How many days makes a week ?",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    }, 

    {
        question: "How many players are allowed on a soccer pitch ?",
        optionA: "10 players",
        optionB: "11 players",
        optionC: "9 players",
        optionD: "12 players",
        correctOption: "optionB"
    },

    {
        question: "Who was the first President of the USA ?",
        optionA: "Alexander Hamilton",
        optionB: "Barack Obama", 
        optionC: "Abraham Lincoln",
        optionD: "George Washington",
        correctOptoin: "optionD",
    },

    {
        question: "30 days has _____ ?",
        optionA: "January",
        optionB: "December",
        optionC: "June",
        optionD: "August",
        correctOption: "optionC",
    },

    {
        question: "How many hours can be found in a day ?",
        optionA: "30 hours",
        optionB: "38 hours",
        optionC: "48 hours",
        optionD: "24 hours",
        correctOption: "optionD",
    },

    {
        question: "Which is the longest river in the world ?",
        optionA: "River Nile",
        optionB: "Long River",
        optionC: "River Niger",
        optionD: "Lake Chad",
        correctOption: "optionA",
    }
]

var shuffledQuestions = [] //empty array to hold suffled selected questions out of all available questions

function handleQuestions(){
    //function to shuffle and push 6 questions to shuffledQuestions arry
//app would be dealing with 6 questions per session
    while(shuffledQuestions.lengh <= 5){
        var random = questions[Math.floow(Math.random() * questions.length)]
        if(!shuffledQuestions.includes(random)){
        shuffledQuestions.push(random)
        }
    }
}

var questionNumber = 1 //holds the current question number
var playerScore = 0 //holds the player score
var wrongAttemt = 0 //amount of wrong answers picked by player
var indexNumber = 0 //will be used in displaying next question

//function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom