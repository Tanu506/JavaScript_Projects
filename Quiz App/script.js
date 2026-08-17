const questionNumber = document.querySelector("#questionNumber");
const progress = document.querySelector("#progress");
const question = document.querySelector("#question");
const option = document.querySelectorAll('.option');
const nextBtn = document.querySelector("#nextBtn");
const score = document.querySelector("#score");
const restartBtn = document.querySelector("#restartBtn");

nextBtn.addEventListener("click",()=>{
    questionNumber.innerHTML = "Question 2 / 10"
    progress.style.width = "20%";
    
})