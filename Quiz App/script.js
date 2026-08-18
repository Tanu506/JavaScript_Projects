const questionNumber = document.querySelector("#questionNumber");
const progress = document.querySelector("#progress");
const question = document.querySelector("#question");
const options = document.querySelector("#options");
const nextBtn = document.querySelector("#nextBtn");
const scoreDisplay = document.querySelector("#score");
const restartBtn = document.querySelector("#restartBtn");
const result = document.querySelector("#result");

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
];

let currentQuestion = 0;
let score = 0;

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
  const selectedOption = options.querySelector(".selected");
  if (!selectedOption) {
    alert("please select an answer!");
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
      if(option.innerText === current.answer){
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
  }, 500);
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
