//Hide quiz container before the start button is clicked
$("#quiz").hide();

$(document).ready(function () {
  //Quiz Questions
  const myQuestions = [
    {
      question:
        "In JavaScript, setInterval and setTimeout are both methods on the window dot object.",
      answers: ["True", "False"],
      correctAnswer: 0,
    },
    {
      question: "JavaScript is an event based language.",
      answers: ["True", "False"],
      correctAnswer: 0,
    },
    {
      question:
        "Which tab in Chrome inspect allows you to see local storage content?",
      answers: ["Console", "Elements", "Sources", "Application"],
      correctAnswer: 3,
    },
    {
      question: "In what year was JavaScript invented?",
      answers: ["1970", "1982", "1995", "2010"],
      correctAnswer: 2,
    },
    {
      question: "JavaScript is the default scripting language in HTML.",
      answers: ["True", "False"],
      correctAnswer: 0,
    },
    {
      question:
        "Which keyword in JavaScript marks a block of statements to be executed as long as a condition is true?",
      answers: ["break", "continue", "for", "return"],
      correctAnswer: 2,
    },
    {
      question:
        "A keyword or reserved word can be used as a variable in JavaScript for specific occasions.",
      answers: ["True", "False"],
      correctAnswer: 1,
    },
    {
      question:
        "In JavaScript the first character of an identifier must be a letter?",
      answers: ["True", "False"],
      correctAnswer: 1,
    },
    {
      question: "What is the name of a data type that only has two options?",
      answers: ["String", "Boolean", "Number", "Object"],
      correctAnswer: 1,
    },
  ];

  //interval for countdown timer
  var interval;

  //Countdown timer to start when "start quiz" button is clicked
  function countdown() {
    clearInterval(interval);
    interval = setInterval(function () {
      var timer = $(".timer").html();
      timer = timer.split(":");
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
        minutes -= 00;
        seconds = 60;
      } else if (seconds < 10 && length.seconds != 2) seconds = "0" + seconds;

      $(".timer").html(minutes + ":" + seconds);

      if (minutes == 0 && seconds == 0) clearInterval(interval);
    }, 1000);
  }

  //Function to subtract 10 seconds for wrong answers
  function wrongAnswer() {
    interval -= 10;
  }

  //Create answer buttons
  function answerButtons() {
    //determine whether to generate 2 answer buttons or four
    $("#btn-0").html(myQuestions[0].answers[0]);
    $("#btn-1").html(myQuestions[0].answers[1]);
    // if (myQuestions.answers.length > 2){
    //   $("#btn-0").html(myQuestions[0].answers[0]);
    //   $("#btn-1").html(myQuestions[0].answers[1]);
    //   $("#btn-2").html(myQuestions[0].answers[2]);
    //   $("#btn-3").html(myQuestions[0].answers[3]);
    // } else {
    //   $("#btn-0").html(myQuestions[0].answers[0]);
    //   $("#btn-1").html(myQuestions[0].answers[1]);
    // }
  }

  function createQuiz() {
    //print question to the page
    // console.log("myQuestions[0].question: ", myQuestions[0].question);
    $("#questions").append(myQuestions[0].question);
    answerButtons();
  }

  //on click of Start Quiz, the timer starts counting down, the html element id quiz is made visible, the start quiz button and the rules disappear
  $("#start").click(function () {
    $(".timer").text("00:60");
    countdown();
    $("#quiz").show();
    $("#start").hide();
    $("#rules").hide();
    createQuiz();
  });

  //clear timer if quiz is finished and user has clicked Display Score (#submit) button
  $("#submit").click(function () {
    $(".timer").text("0:00");
    clearInterval(interval);
  });
});
