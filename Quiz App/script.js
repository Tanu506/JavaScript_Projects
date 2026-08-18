const questionNumber = document.querySelector("#questionNumber");
const progress = document.querySelector("#progress");
const question = document.querySelector("#question");
const options = document.querySelector("#options");
const nextBtn = document.querySelector("#nextBtn");
const scoreDislay = document.querySelector("#score");
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
   current.options.forEach(function(option){
      const button = document.createElement('button');
      button.classList.add("option");
      button.innerText = option;
      options.appendChild(button);
   })
}

showQuestion();
nextBtn.addEventListener("click", function () {
  currentQuestion++;
  showQuestion();
});


