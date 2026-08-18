const questionNumber = document.querySelector("#questionNumber");
const progress = document.querySelector("#progress");
const question = document.querySelector("#question");
const options = document.querySelector("#options");
const nextBtn = document.querySelector("#nextBtn");
const scoreDisplay = document.querySelector("#score");
const restartBtn = document.querySelector("#restartBtn");
const result = document.querySelector("#result");
const timer = document.querySelector("#timer");

const questions = [
  {
    question: "Which language is used to style a webpage?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS",
  },

  {
    question: "Which language is used to make a webpage interactive?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: "JavaScript",
  },

  {
    question: "Which tag is used to create a paragraph in HTML?",
    options: ["<h1>", "<p>", "<div>", "<span>"],
    answer: "<p>",
  },

  {
    question:
      "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: "const",
  },

  {
    question: "Which method is used to add an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },

  {
    question: "Which symbol is used for strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    answer: "===",
  },

  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()",
    ],
    answer: "JSON.parse()",
  },

  {
    question: "Which event occurs when a user clicks an HTML element?",
    options: ["hover", "click", "change", "submit"],
    answer: "click",
  },

  {
    question: "Which method is used to select an element by its ID?",
    options: [
      "querySelector()",
      "getElementById()",
      "getElement()",
      "selectById()",
    ],
    answer: "getElementById()",
  },

  {
    question:
      "Which function is used to run code repeatedly after a fixed time interval?",
    options: ["setTimeout()", "setInterval()", "repeat()", "runEvery()"],
    answer: "setInterval()",
  },
];

let currentQuestion = 0;
let score = 0;

let timeLeft = 10;
let timerInterval;

function showQuestion() {
  const current = questions[currentQuestion];
  questionNumber.innerText = `Question ${currentQuestion + 1} / ${questions.length}`;
  progress.style.width = `${((currentQuestion + 1) * 100) / questions.length}%`;
  question.innerText = current.question;
  //   options.innerHTML = `<button class="option">${current.options[0]}</button>
  //                        <button class="option">${current.options[1]}</button>
  //                        <button class="option">${current.options[2]}</button>
  //                        <button class="option">${current.options[3]}</button>`;
  options.innerHTML = "";
  current.options.forEach(function (option) {
    const button = document.createElement("button");
    button.classList.add("option");
    button.innerText = option;
    options.appendChild(button);
  });
  startTimer();
}

showQuestion();

options.addEventListener("click", function (e) {
  if (e.target.classList.contains("option")) {
    const allOptions = options.querySelectorAll(".option");
    allOptions.forEach(function (option) {
      option.classList.remove("selected");
    });
    e.target.classList.add("selected");
  }
});

nextBtn.addEventListener("click", function () {
  clearInterval(timerInterval);
  const selectedOption = options.querySelector(".selected");
  if (!selectedOption) {
    alert("please select an answer!");
    startTimer();
    return;
  }
  const current = questions[currentQuestion];

  if (selectedOption.innerText === current.answer) {
    score++;
    selectedOption.classList.add("correct");
    console.log(score);
  } else {
    selectedOption.classList.add("wrong");
    const allOptions = options.querySelectorAll(".option");
    allOptions.forEach(function (option) {
      if (option.innerText === current.answer) {
        option.classList.add("correct");
      }
    });
  }

  if (currentQuestion === questions.length - 1) {
    setTimeout(showResult, 700);
    return;
  }

  setTimeout(function () {
    currentQuestion++;
    showQuestion();
  }, 700);
});

function showResult() {
  document.querySelector(".quiz-box").style.display = "none";
  result.style.display = "block";
  scoreDisplay.innerText = `${score}/${questions.length}`;
  document.querySelector(".quiz-header").style.display = "none";
}

restartBtn.addEventListener("click", function () {
  result.style.display = "none";
  document.querySelector(".quiz-box").style.display = "block";
  score = 0;
  currentQuestion = 0;
  document.querySelector(".quiz-header").style.display = "block";
  showQuestion();
});

function startTimer() {
  clearInterval(timerInterval);

  timeLeft = 10;
  timer.innerText = timeLeft;

  timerInterval = setInterval(function () {
    timeLeft--;
    timer.innerText = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      if (currentQuestion === questions.length - 1) {
        showResult();
        return;
      }
      currentQuestion++;
      showQuestion();
    }
  }, 1000);
}
