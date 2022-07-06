// variable references for html elements
var mainHeader = document.querySelector("header");
var highScore = document.querySelector(".high-scores");
var quizTimer = document.querySelector(".timer");
var quizHeader = document.querySelector(".quiz-header");
var quizContent = document.querySelector(".quiz-content");
var quizFooter = document.querySelector(".footer");
var startQuizBtn = document.querySelector(".start-btn");
var answerOptions = document.querySelector(".intro-para");
var answerOptionsBtn = document.querySelector(".intro-para-text");
var goBackBtn = document.querySelector(".go-back");

// Each object in the array contains the question, answer options, and the index of the correct answer
var questionBankArr = [
  {
    question: "Commonly used data types DO NOT include:",
    option: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ],
    answer: "3. alerts",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    option: [
      { text: "numbers and strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true },
    ],
    answer: "4. all of the above",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    option: [
      { text: "JavaScript", correct: false },
      { text: "terminal/bash", correct: false },
      { text: "for loops", correct: false },
      { text: "console.log", correct: true },
    ],
    answer: "4. console.log",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    option: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "parenthesis", correct: false },
    ],
    answer: "3. quotes",
  },
  {
    question: "The condition in an if / else statement is enclosed with _____.",
    option: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: false },
      { text: "parenthesis", correct: true },
      { text: "square brackets", correct: false },
    ],
    answer: "3. parenthesis",
  },
];

var timer = 75;
var currentQuestion = 0;
var timeout;

// timer function
var countDownTimer = function () {
  if (timer > 0) {
    timer--;
    quizTimer.textContent = timer;
    timeout = setTimeout(countDownTimer, 1000);
  } else {
    alert("You ran out of time!");
    clearTimeout(timeout);
  }
};

var count = 0;

// function to start quiz
var startQuiz = function () {
  //   hide start quiz button
  startQuizBtn.classList.add("hide");
  //   create answer option button 1
  optionBtnOne = document.createElement("button");
  optionBtnOne.classList.add("qsOneOptionOneBtn", "click-event-class1");
  optionBtnOne.innerText = "1. strings";
  quizContent.appendChild(optionBtnOne);
  //   create answer option button 2
  optionBtnTwo = document.createElement("button");
  optionBtnTwo.classList.add("qsOneOptionTwoBtn", "click-event-class1");
  optionBtnTwo.innerText = "2. booleans";
  quizContent.appendChild(optionBtnTwo);
  //   create answer option button 3
  optionBtnThree = document.createElement("button");
  optionBtnThree.classList.add("qsOneOptionThreeBtn", "click-event-class1");
  optionBtnThree.innerText = "3. alerts";
  quizContent.appendChild(optionBtnThree);
  //   create answer option button 4
  optionBtnFour = document.createElement("button");
  optionBtnFour.classList.add("qsOneOptionFourBtn", "click-event-class1");
  optionBtnFour.innerText = "4. numbers";
  quizContent.appendChild(optionBtnFour);

  // replace header text with quiz question
  quizHeader.textContent = quizHeader.textContent.replace(
    "Quizler: JavaScript Quiz",
    questionBankArr[currentQuestion].question
  );

  // replace intro para with answer option
  quizContent.replaceChild(optionBtnOne, answerOptions);

  // feedback alerts
  quizContent.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(".click-event-class1")) {
      if (element.textContent === questionBankArr[currentQuestion].answer) {
        alert("Excellent! You got that right.");
        count = count + 10;
      } else {
        alert("Uh-oh! That's incorrect.");
        timer = timer - 10;
      }
      questionTwo();
    }
  });

  countDownTimer();
};

var questionTwo = function () {
  currentQuestion++;
  // replace existing question with new question
  quizHeader.textContent = questionBankArr[currentQuestion].question;
  //   remove existing answer options
  optionBtnOne.remove();
  optionBtnTwo.remove();
  optionBtnThree.remove();
  optionBtnFour.remove();
  //   create answer option button 1
  qsTwoOptionBtnOne = document.createElement("button");
  qsTwoOptionBtnOne.classList.add("qsOneOptionOneBtn", "click-event-class2");
  qsTwoOptionBtnOne.innerText = "1. numbers and strings";
  quizContent.appendChild(qsTwoOptionBtnOne);
  //   create answer option button 2
  qsTwoOptionBtnTwo = document.createElement("button");
  qsTwoOptionBtnTwo.classList.add("qsOneOptionTwoBtn", "click-event-class2");
  qsTwoOptionBtnTwo.innerText = "2. other arrays";
  quizContent.appendChild(qsTwoOptionBtnTwo);
  //   create answer option button 3
  qsTwoOptionBtnThree = document.createElement("button");
  qsTwoOptionBtnThree.classList.add(
    "qsOneOptionThreeBtn",
    "click-event-class2"
  );
  qsTwoOptionBtnThree.innerText = "3. booleans";
  quizContent.appendChild(qsTwoOptionBtnThree);
  //   create answer option button 4
  qsTwoOptionBtnFour = document.createElement("button");
  qsTwoOptionBtnFour.classList.add("qsOneOptionFourBtn", "click-event-class2");
  qsTwoOptionBtnFour.innerText = "4. all of the above";
  quizContent.appendChild(qsTwoOptionBtnFour);

  //   feedback alerts
  quizContent.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(".click-event-class2")) {
      if (element.textContent === questionBankArr[currentQuestion].answer) {
        alert("Great job! You're absolutely right.");
        count = count + 10;
      } else {
        alert("Uh-oh! That's incorrect.");
        timer = timer - 10;
      }
      questionThree();
    }
  });
};

var questionThree = function () {
  currentQuestion++;
  // replace existing question with new question
  quizHeader.textContent = questionBankArr[currentQuestion].question;

  qsTwoOptionBtnOne.remove();
  qsTwoOptionBtnTwo.remove();
  qsTwoOptionBtnThree.remove();
  qsTwoOptionBtnFour.remove();
  //   create answer option button 1
  qsThreeOptionBtnOne = document.createElement("button");
  qsThreeOptionBtnOne.classList.add("qsOneOptionOneBtn", "click-event-class3");
  qsThreeOptionBtnOne.innerText = "1. JavaScript";
  quizContent.appendChild(qsThreeOptionBtnOne);
  //   create answer option button 2
  qsThreeOptionBtnTwo = document.createElement("button");
  qsThreeOptionBtnTwo.classList.add("qsOneOptionTwoBtn", "click-event-class3");
  qsThreeOptionBtnTwo.innerText = "2. terminal/bash";
  quizContent.appendChild(qsThreeOptionBtnTwo);
  //   create answer option button 3
  qsThreeOptionBtnThree = document.createElement("button");
  qsThreeOptionBtnThree.classList.add(
    "qsOneOptionThreeBtn",
    "click-event-class3"
  );
  qsThreeOptionBtnThree.innerText = "3. for loops";
  quizContent.appendChild(qsThreeOptionBtnThree);
  //   create answer option button 4
  qsThreeOptionBtnFour = document.createElement("button");
  qsThreeOptionBtnFour.classList.add(
    "qsOneOptionFourBtn",
    "click-event-class3"
  );
  qsThreeOptionBtnFour.innerText = "4. console.log";
  quizContent.appendChild(qsThreeOptionBtnFour);

  //   feedback alerts
  quizContent.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(".click-event-class3")) {
      if (element.textContent === questionBankArr[currentQuestion].answer) {
        alert("Fantastic! Keep it going.");
        count = count + 10;
      } else {
        alert("Uh-oh! That's incorrect.");
        timer = timer - 10;
      }
      questionFour();
    }
  });
};

var questionFour = function () {
  currentQuestion++;
  // replace existing question with new question
  quizHeader.textContent = questionBankArr[currentQuestion].question;

  qsThreeOptionBtnOne.remove();
  qsThreeOptionBtnTwo.remove();
  qsThreeOptionBtnThree.remove();
  qsThreeOptionBtnFour.remove();
  //   create answer option button 1
  qsFourOptionBtnOne = document.createElement("button");
  qsFourOptionBtnOne.classList.add("qsOneOptionOneBtn", "click-event-class4");
  qsFourOptionBtnOne.innerText = "1. commas";
  quizContent.appendChild(qsFourOptionBtnOne);
  //   create answer option button 2
  qsFourOptionBtnTwo = document.createElement("button");
  qsFourOptionBtnTwo.classList.add("qsOneOptionTwoBtn", "click-event-class4");
  qsFourOptionBtnTwo.innerText = "2. curly brackets";
  quizContent.appendChild(qsFourOptionBtnTwo);
  //   create answer option button 3
  qsFourOptionBtnThree = document.createElement("button");
  qsFourOptionBtnThree.classList.add(
    "qsOneOptionThreeBtn",
    "click-event-class4"
  );
  qsFourOptionBtnThree.innerText = "3. quotes";
  quizContent.appendChild(qsFourOptionBtnThree);
  //   create answer option button 4
  qsFourOptionBtnFour = document.createElement("button");
  qsFourOptionBtnFour.classList.add("qsOneOptionFourBtn", "click-event-class4");
  qsFourOptionBtnFour.innerText = "4. parenthesis";
  quizContent.appendChild(qsFourOptionBtnFour);

  //   feedback alerts
  quizContent.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(".click-event-class4")) {
      if (element.textContent === questionBankArr[currentQuestion].answer) {
        alert("Awesome! You're on a roll today!");
        count = count + 10;
      } else {
        alert("Uh-oh! That's incorrect.");
        timer = timer - 10;
      }
      questionFive();
    }
  });
};

var questionFive = function () {
  currentQuestion++;
  // replace existing question with new question
  quizHeader.textContent = questionBankArr[currentQuestion].question;

  qsFourOptionBtnOne.remove();
  qsFourOptionBtnTwo.remove();
  qsFourOptionBtnThree.remove();
  qsFourOptionBtnFour.remove();
  //   create answer option button 1
  qsFiveOptionBtnOne = document.createElement("button");
  qsFiveOptionBtnOne.classList.add("qsOneOptionOneBtn", "click-event-class5");
  qsFiveOptionBtnOne.innerText = "1. quotes";
  quizContent.appendChild(qsFiveOptionBtnOne);
  //   create answer option button 2
  qsFiveOptionBtnTwo = document.createElement("button");
  qsFiveOptionBtnTwo.classList.add("qsOneOptionTwoBtn", "click-event-class5");
  qsFiveOptionBtnTwo.innerText = "2. curly brackets";
  quizContent.appendChild(qsFiveOptionBtnTwo);
  //   create answer option button 3
  qsFiveOptionBtnThree = document.createElement("button");
  qsFiveOptionBtnThree.classList.add(
    "qsOneOptionThreeBtn",
    "click-event-class5"
  );
  qsFiveOptionBtnThree.innerText = "3. parenthesis";
  quizContent.appendChild(qsFiveOptionBtnThree);
  //   create answer option button 4
  qsFiveOptionBtnFour = document.createElement("button");
  qsFiveOptionBtnFour.classList.add("qsOneOptionFourBtn", "click-event-class5");
  qsFiveOptionBtnFour.innerText = "4. square brackets";
  quizContent.appendChild(qsFiveOptionBtnFour);

  //   feedback alerts
  quizContent.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(".click-event-class5")) {
      if (element.textContent === questionBankArr[currentQuestion].answer) {
        alert("Well done! Don't forget to save your high score.");
        count++;
      } else {
        alert("Uh-oh! That's incorrect.");
        timer = timer - 10;
      }
      clearTimeout(timeout);
      highScorePage();
    }
  });
};

var highScorePage = function () {
  // replace existing question with score page header
  quizHeader.textContent = "All done! Your final score is " + count + ".";
  // remove existing answer option buttons
  qsFiveOptionBtnOne.remove();
  qsFiveOptionBtnTwo.remove();
  qsFiveOptionBtnThree.remove();
  qsFiveOptionBtnFour.remove();
  // create div for input field & submit button
  finalScoreTextDiv = document.createElement("div");
  finalScoreTextDiv.className = "final-score-div";
  quizContent.appendChild(finalScoreTextDiv);
  // initials input field
  inputField = document.createElement("input");
  inputField.classList.add("input-field", "input-field2");
  inputField.setAttribute("type", "text");
  inputField.setAttribute("id", "initials-input");
  inputField.setAttribute("placeholder", "Add your initials here");
  finalScoreTextDiv.appendChild(inputField);
  // submit button
  submitInitials = document.createElement("button");
  submitInitials.classList.add("submit-initials", "submit-initials2");
  submitInitials.innerText = "Submit";
  finalScoreTextDiv.appendChild(submitInitials);

  submitInitials.addEventListener("click", inputField);

  userInput = document.querySelector("#initials-input").value;
  // set & retrieve score from local storage
  var highScore = JSON.parse(localStorage.getItem("scores")) || [];
  var newScore = { initials: userInput, score: count };
  highScore.push(newScore);
  localStorage.setItem("scores", JSON.stringify(highScore));
};
userInput = "";

// go back from high scores list page
// goBackBtn.addEventListener("click", () => {
//   history.back();
// });

// starts the quiz
startQuizBtn.addEventListener("click", startQuiz);
