var timer = document.querySelector("#seconds");
var submitButton = document.querySelector(".submit");
var initials = document.querySelector("#initials").value;
var input = document.querySelector(".input");
var promptArea = document.querySelector(".prompt");
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
var questionList = ["What function is used to run code every milisceond?","What is the software used to \"shorten\" javascipt?"];
var anwsersA = ["var","functon()","CSS"];
var anwsersB = ["function()","JSON.stringify()","Jquery"];
var anwsersC = ["getElementById()","setInterval()","HTML"];
var anwsersD = ["console.log","alert()","Bootstrap"];
    var secondsLeft = 60;
    var score = 0;
 function setTime() {
     var timerInterval = setInterval(function(){
         secondsLeft--;
         timer.textContent = secondsLeft + "s";

         if(secondsLeft===0){
             clearInterval(timerInterval);
             alert("Time is up!");
             timer.textContent = "Up!"
         }
     }, 1200);
 } 
 function quiz(){
     submitButton.classList.add('hide');
     promptArea.classList.add('hide');
     quizCard1.classList.remove('hide');
     buttonB.addEventListener("click", function(){
        quizCard1.classList.add('hide');
        quizCard2.classList.remove('hide');
        score+=5;
        startingScore.textContent = score;
     });
     buttonG.addEventListener("click",function(){
        quizCard2.classList.add('hide');
        quizCard3.classList.remove('hide');
        score+=5;
        startingScore.textContent = score;
     });
     buttonL.addEventListener("click",function(){
        quizCard3.classList.add('hide');
        quizCard4.classList.remove('hide');
        score+=5;
        startingScore.textContent = score;
     });
     buttonO.addEventListener("click",function(){
        quizCard4.classList.add('hide');
        quizCard5.classList.remove('hide');
        score+=5;
        startingScore.textContent = score;
     });
     buttonQ.addEventListener("click",function(){
        quizCard5.classList.add('hide');
        score+=5;
        startingScore.textContent = score;
     });
 }
submitButton.addEventListener("click",function(){
    setTime();
    quiz();
});
 

















