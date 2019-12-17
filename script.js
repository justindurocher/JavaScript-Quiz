var timer = document.querySelector("#seconds");
var restartButton = document.querySelector(".restart");
var submitButton = document.querySelector(".submit");
var initials = document.querySelector("#initials");
var input = document.querySelector(".input");
var promptArea = document.querySelector(".prompt");
var welcome = document.querySelector(".welcome");
var content = document.querySelector(".content");
var quizCard1 = document.querySelector(".quiz-1");
var quizCard2 = document.querySelector(".quiz-2");
var quizCard3 = document.querySelector(".quiz-3");
var quizCard4 = document.querySelector(".quiz-4");
var quizCard5 = document.querySelector(".quiz-5");
var buttonA = document.querySelector(".A");
var buttonB = document.querySelector(".B");
var buttonC = document.querySelector(".C");
var buttonD = document.querySelector(".D");
var buttonE = document.querySelector(".E");
var buttonF = document.querySelector(".F");
var buttonG = document.querySelector(".G");
var buttonH = document.querySelector(".H");
var buttonI = document.querySelector(".I");
var buttonJ = document.querySelector(".J");
var buttonK = document.querySelector(".K");
var buttonL = document.querySelector(".L");
var buttonM = document.querySelector(".M");
var buttonN = document.querySelector(".N");
var buttonO = document.querySelector(".O");
var buttonP = document.querySelector(".P");
var buttonQ = document.querySelector(".Q");
var buttonR = document.querySelector(".R");
var buttonS = document.querySelector(".S");
var buttonT = document.querySelector(".T");
var question = document.querySelector(".question");
var startingScore = document.querySelector("#score");
var quizCardFinal = document.querySelector(".quiz-final");
var finalSeconds = document.querySelector(".final-seconds");
var finalScore = document.querySelector(".final-score");
    var secondsLeft = 30;
    var score = 0;
 restartButton.addEventListener("click", reload);
 function reload(){
     document.location.reload();
 }
 function setTime() {
     var timerInterval = setInterval(function(){
         secondsLeft--;
         timer.textContent = secondsLeft + "s";

         if(secondsLeft===0 || score===25){
             clearInterval(timerInterval);
             alert("Time is up!");
             timer.textContent = "None!";
             quizCard1.classList.add('hide');
             quizCard2.classList.add('hide');
             quizCard3.classList.add('hide');
             quizCard4.classList.add('hide');
             quizCard5.classList.add('hide');
             quizCardFinal.classList.remove('hide');
         }
     }, 1200);
 } 
submitButton.addEventListener("click",function(){
    setTime();
    quiz();
});
 

















