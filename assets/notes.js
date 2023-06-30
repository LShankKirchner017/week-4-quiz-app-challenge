// press start button 
// var startBtn = document.querySelector(".start-button")

// start timer
// var timeEl = document.querySelector(".timer")
// var mainEl = document.getElementById("main")

// var count = 60;
// function setTime() {
//     var timerInterval = setInterval (function() {
//         secondsLeft--;
//         timeEl.textContent = secondsLeft + " seconds until quiz ends.";

//         if(secondsLeft === 0) {
//             clearInterval(timerInterval);
//             sendMessage();
//         }
//     }, 1000);
// }

// function sendMessage() {
//     timeEl.textContent = " ";
// }

// setTime();


// Right or wrong function 
// function checkAnswer(event){
//     console.log(event.target.id)
//     if(event.target.id != questions[questionIndex].correct) {
//         //deduct time
//         console.log('incorrect');
//     } 
//     questionIndex++
//     if (questionIndex === 4) {
//         //end screen
//         console.log("Quiz Finished!")
//     }
//     else {
//         displayQuestions();
//     }
// }


//if you do startQuiz() instead of startQuiz, it will start the function right away
startBtn.addEventListener('click', startQuiz);

quizOptions.addEventListener('click', function(event) {
    checkAnswer(event);
})