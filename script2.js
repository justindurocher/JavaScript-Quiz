function quiz(){
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
   localStorage.setItem("name",initials.value);
    submitButton.addClass('hide');
    promptArea.addClass('hide');
    welcome.addClass('hide');
    content.addClass('hide');
    quizCard1.removeClass('hide');
    $(".A").on("click",function(){
      secondsLeft-=2;
      timer.text(secondsLeft);
      $(".A").addClass('incorrect');
    });
    $(".B").on("click", function(){
       quizCard1.addClass('hide');
       quizCard2.removeClass('hide');
       score+=5;
       startingScore.text(score);
    });
    $(".C").on("click",function(){
      secondsLeft-=2;
      timer.text(secondsLeft);
      $(".C").addClass('incorrect');
    });
    $(".D").on("click",function(){
      secondsLeft-=2;
      timer.text(secondsLeft);
      $(".D").addClass('incorrect');
    });
    $(".E").on("click",function(){
      secondsLeft-=2;
      timer.text(secondsLeft);
      $(".E").addClass('incorrect');
    });
    $(".F").on("click",function(){
      secondsLeft-=2;
      timer.text(secondsLeft);
      $(".F").addClass('incorrect');
    });
    $(".G").on("click",function(){
       quizCard2.addClass('hide');
       quizCard3.removeClass('hide');
       score+=5;
       startingScore.text(score);
    });
    $(".H").on("click",function(){
      secondsLeft-=2;
      timer.text(secondsLeft);
      $(".H").addClass('incorrect');
    });
    $(".I").on("click",function(){
      secondsLeft-=2;
      timer.text(secondsLeft);
      $(".I").addClass('incorrect');
    });
    $(".J").on("click",function(){
      secondsLeft-=2;
      timer.text(secondsLeft);
      $(".J").addClass('incorrect');
    });
    $(".K").on("click",function(){
      secondsLeft-=2;
      timer.text(secondsLeft);
      $(".K").addClass('incorrect');
    });
    $(".L").on("click",function(){
       quizCard3.addClass('hide');
       quizCard4.removeClass('hide');
       score+=5;
       startingScore.text(score);
    });
    $(".M").on("click",function(){
      secondsLeft-=2;
      timer.text(secondsLeft);
      $(".M").addClass('incorrect');
    });
    $(".N").on("click",function(){
      secondsLeft-=2;
      timer.text(secondsLeft);
      $(".N").addClass('incorrect');
    });
    $(".O").on("click",function(){
       quizCard4.addClass('hide');
       quizCard5.removeClass('hide');
       score+=5;
       startingScore.text(score);
    });
    $(".P").on("click",function(){
      secondsLeft-=2;
      timer.text(secondsLeft);
      $(".P").addClass('incorrect');
    });
    $(".Q").on("click",function(){
       quizCard5.addClass('hide');
       quizCardFinal.removeClass('hide');
       score+=5;
       startingScore.text(score);
       finalSeconds.text(secondsLeft);
       finalScore.text(score+secondsLeft);
       localStorage.setItem("score",finalScore.text());
    });
    $(".R").on("click",function(){
      secondsLeft-=2;
      timer.text(secondsLeft);
      $(".R").addClass('incorrect');
    });
    $(".S").on("click",function(){
      secondsLeft-=2;
      timer.text(secondsLeft);
      $(".S").addClass('incorrect');
    });
    $(".T").on("click",function(){
      secondsLeft-=2;
      timer.text(secondsLeft);
      $(".T").addClass('incorrect');
    });
}