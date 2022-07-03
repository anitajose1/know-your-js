// variable references for html elements
var mainHeader = document.querySelector("header");
var highScore = document.querySelector(".high-score");
var quizTimer = document.querySelector(".timer");
var quizHeader = document.querySelector(".quiz-header");
var quizContent = document.querySelector(".quiz-content");
var quizFooter = document.querySelector("footer");

var timer = 75;
var currentQuestion = 0;
var timeout;

// Each object in the arrays contains the question, answer options, and the index of the correct answer
var QuestionBankArr = [
  {
    question: "Commonly used data types DO NOT include:",
    option: ["strings", "booleans", "alerts", "numbers"],
    answer: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    option: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: 3,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    option: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: 3,
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables",
    option: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: 2,
  },
  {
    question: "The condition in an if / else statement is enclosed with _____.",
    option: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: 2,
  },
];

// timer function
var timerCountdown = function () {
  if (timer > 0) {
    timer--;
    quizTimer.textContent = timer;
    timeout = setTimeout(timerCountdown, 1000);
    console.log(timer);
  } else {
    alert("You ran out of time!");
    clearTimeout(timeout);
  }
};
