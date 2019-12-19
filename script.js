var timer = $("#seconds");
var restartButton = $(".restart");
var submitButton = $(".submit");
var initials = $("#initials");
var input = $(".input");
var promptArea = $(".prompt");
var welcome = $(".welcome");
var content = $(".content");
var quizCard1 = $(".quiz-1");
var quizCard2 = $(".quiz-2");
var quizCard3 = $(".quiz-3");
var quizCard4 = $(".quiz-4");
var quizCard5 = $(".quiz-5");
var question = $(".question");
var startingScore = $("#score");
var quizCardFinal = $(".quiz-final");
var finalSeconds = $(".final-seconds");
var finalScore = $(".final-score");
    var secondsLeft = 30;
    var score = 0;
 restartButton.on("click", reload);
 function reload(){
     document.location.reload();
 }
 function setTime() {
     var timerInterval = setInterval(function(){
         secondsLeft--;
         timer.text(secondsLeft + "s");

         if(score===25 || secondsLeft===0){
             clearInterval(timerInterval);
             alert("Time is up!");
             timer.text("None!");
             quizCard1.addClass('hide');
             quizCard2.addClass('hide');
             quizCard3.addClass('hide');
             quizCard4.addClass('hide');
             quizCard5.addClass('hide');
             quizCardFinal.removeClass('hide');
         }
     }, 1200);
 } 
submitButton.on("click",function(){
    setTime();
    quiz();
});
 

















