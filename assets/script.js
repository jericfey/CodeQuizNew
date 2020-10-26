//Define variables to store references to HTML elements
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
// console.log(quizContainer);

//Hide quiz container before the start button is clicked
$("#quiz").hide();

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

$(document).ready(function () {
  //create an array variable for all questions
  var question = [];
  //score variable created to hold the users score as they go through the quiz
  var score = 0;

  $("#start").click(function () {
    $("#quiz").html("Questions go here");
  });

  //puts all questions into an array to pull from
  myQuestions.forEach(function (obj) {
    question.push(obj.question);
  });

  $("#start").on("click", function () {
    // console.log("you clicked a button");
    //correctAnswer from the myQuestions[i].correctAnswer
    // var correctAnswer = myQuestions[].correctAnswer.value;
    //stores the value from the button the user clicks on
    // var userChoice = $(this).val();
    // console.log(question);
    // for (i = 0; i < myQuestions.length; i++) {
    //   //append each question to the #questions element
    //   // $("#questions").append(myQuestions.question[i].value + "<br>");
    //   //generate answer buttons for each question based on number of answers
    //   for (i = 0; i < myQuestions.answers.length; i++) {
    //     //determine if there should be 2 or 4 buttons
    //     if ((myQuestions.answers.length = 4)) {
    //       $("");
    //     }
    //   }
    // }
    // if (parseInt(userChoice) === correctAnswer) {
    //   $("#correct-answer").text(myQuestions.correctAnswer.value);
    //   console.log("you guessed correctly");
    //   $("#result").text("You guessed correctly");
    // } else {
    //   console.log("you guessed wrong");
    //   $("#results").text("You guessed wrong");
    // }
  });
  // // Functions to build the quiz with questions and button answers
  // function createQuiz() {
  //   //function to generate the question to the screen
  //   $('')
  //   //function to generate answer-buttons
  // }

  //Store the value of the button clicked to compare later with the correct answer
  // $("#answer-buttons").on("click", function () {
  //   //Store the option the user selects for each question
  //   var userChoice = $(this).val();
  //   console.log(
  //     "You clicked on" +
  //       $(this).text().trim() +
  //       " " +
  //       $(this).val() +
  //       " " +
  //       $(this).attr("value")
  //   );
  //   if (userChoice === myQuestions.correctAnswer) {
  //     //Add 10 points if the user's answer is correct
  //     score = score + 10;
  //   } else {
  //     //Subtract 10 seconds from countdown if answer is wrong
  //     wrongAnswer();
  //   }
  // });
});

//For each question we get the current value and index (position in array)
// myQuestions.forEach((currentQuestion, questionNumber) => {
//   // variable to store list of answers to the question
//   const answers = [];

//   //for loop to create each available answer as a label element using template literals
//   // for (letter in currentQuestion.answers) {
//   //   //add an HTML Radio button
//   //   answers.push(
//   //     `<label>
//   //                     <input type="radio" name="question${questionNumber}" value="${letter}">
//   //                     ${letter} :
//   //                     ${currentQuestion.answers[letter]} \u00A0
//   //                 </label>`
//   //   );
//   // }

//   output.push(
//     //added div element with class > slide to hold question and answer containers
//     `<div class="slide">
//       <div class="question"> ${currentQuestion.question} </div>
//       <div class="answers"> ${answers.join("")} </div>
//      </div>`
//   );
// });
//combine output list into one string of HTML and print to screen
//   quizContainer.innerHTML = output.join("");
// }

// function showResults() {
//   //select all answer containers from the quiz and create variables to keep track of current answer and total number of correct answers
//   const answerContainers = quizContainer.querySelectorAll(".answers");

//   //keep track of user's answers
//   let numCorrect = 0;

//   //For each question loop through and check the answers
//   myQuestions.forEach((currentQuestion, questionNumber) => {
//     //find selected answer by looking inside the answer container for current question
//     const answerContainer = answerContainers[questionNumber];
//     //define CSS selector for which radio button is checked
//     const selector = `input[name=question${questionNumber}]:checked`;
//     //using querySelector to search CSS for defined answerContainer and get the value
//     // OR (|| {}) (empty object) is used in case a question is left blank and not answered instead of showing an error
//     //The value with either be the user's answer or undefined and can skip question

//     // if answer is correct
//     if (userAnswer === currentQuestion.correctAnswer) {
//       // add 1 to the number of correct answers
//       numCorrect++;

//       // color the answers green if correct
//       answerContainers[questionNumber].style.color = "lightgreen";
//     } else {
//       //And Red if answer is wrong
//       answerContainers[questionNumber].style.color = "red";
//     }
//   });

//   // show number of correct answers out of total
//   resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
// }

// //Play the quiz!
// createQuiz();

// //Pagination - variables to store references to navigation buttons and keep track of slide position
// const previousButton = document.getElementById("previous");
// const nextButton = document.getElementById("next");
// const slides = document.querySelectorAll(".slide");
// let currentSlide = 0;

// //manages question/answer slide activity
// function showSlide(n) {
//   //by removing the active-slide class the current slide is hidden
//   slides[currentSlide].classList.remove("active-slide");
//   //by adding the active-slide class the current slide is displayed
//   slides[n].classList.add("active-slide");
//   //updates current slide number
//   currentSlide = n;

//   //if we are on the first slide, hide the previous slide button, otherwise show the button
//   if (currentSlide === 0) {
//     previousButton.style.display = "none";
//   } else {
//     previousButton.style.display = "inline-block";
//   }
//   //if we are on the last slide, hide the Next Slide button and show Submit, otherwise show Next slide
//   if (currentSlide === slides.length - 1) {
//     nextButton.style.display = "none";
//     submitButton.style.display = "inline-block";
//   } else {
//     nextButton.style.display = "inline-block";
//     submitButton.style.display = "none";
//   }
// }

// //Show first slide
// showSlide(currentSlide);

// //make navigation buttons work using showSlide function to make the buttons show the previous or next slide
// function showNextSlide() {
//   showSlide(currentSlide + 1);
// }

// function showPreviousSlide() {
//   showSlide(currentSlide - 1);
// }

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

//on click of Start Quiz, the timer starts counting down, the html element id quiz is made visible, the start quiz button and the rules disappear
$("#start").click(function () {
  $(".timer").text("00:60");
  countdown();
  $("quiz").show();

  $("#start").hide();
  $("#rules").hide();
  // createQuiz();
});

$("#submit").click(function () {
  $(".timer").text("0:00");
  clearInterval(interval);
});

//EVENT LISTENERS
// on submit, show results
// submitButton.addEventListener("click", showResults);
// //Show previous slide button
// previousButton.addEventListener("click", showPreviousSlide);
// //show next slide button
// nextButton.addEventListener("click", showNextSlide);
