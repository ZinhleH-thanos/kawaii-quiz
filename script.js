const questions = [
  {
    question: "What does HTML stand for?",
    choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Mark Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language adds style to websites?",
    choices: ["HTML", "CSS", "Python"],
    answer: "CSS"
  },
  {
    question: "Which one is a JavaScript framework?",
    choices: ["Django", "React", "Flask"],
    answer: "React"
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  let q = questions[current];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";

  q.choices.forEach((choice) => {
    let btn = document.createElement("div");
    btn.classList.add("choice");
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(choice);
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(choice) {
  let correct = questions[current].answer;
  if (choice === correct) score++;
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = score;
}

function restartQuiz() {
  current = 0;
  score = 0;
  resultEl.classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  loadQuestion();
}

loadQuestion();