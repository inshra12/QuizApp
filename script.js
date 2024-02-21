const questions = [
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      {
        text: "Earth",
        correct: false,
      },
      {
        text: "Jupiter",
        correct: true,
      },
      {
        text: "Mars",
        correct: false,
      },
      {
        text: "Saturn",
        correct: false,
      },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      {
        text: "Charles Dickens",
        correct: false,
      },
      {
        text: "William Shakespeare",
        correct: true,
      },
      {
        text: "Jane Austen",
        correct: false,
      },
      {
        text: "Mark Twain",
        correct: false,
      },
    ],
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    answers: [
      {
        text: "Mars",
        correct: true,
      },
      {
        text: "Venus",
        correct: false,
      },
      {
        text: "Jupiter",
        correct: false,
      },
      {
        text: "Mercury",
        correct: false,
      },
    ],
  },
  {
    question: "In what year did the Titanic sink?",
    answers: [
      {
        text: "1912",
        correct: true,
      },
      {
        text: "1905",
        correct: false,
      },
      {
        text: "1925",
        correct: false,
      },
      {
        text: "1930",
        correct: false,
      },
    ],
  },
];





const quizQuestions = document.getElementById("question");
const quizAnswers = document.getElementById("answers");
const nextBtn = document.getElementById("next");
let index = 0;
let score = 0;

function startQuiz() {
  index = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[index];
  let questionNo = index + 1;
  quizQuestions.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    quizAnswers.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("inCorrect");
  }

  Array.from(quizAnswers.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true; // Move the disabling of buttons here
  });

  nextBtn.style.display = "block";
}

function resetState() {
  nextBtn.style.display = "none";
  quizAnswers.innerHTML = ""; // Use innerHTML to clear content
}

function handleNextBtn() {
  index++;
  if (index < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  quizQuestions.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

nextBtn.addEventListener( ("click") ,()=>{
  if(index<questions.length)
  {
    handleNextBtn();
  }
  else{
    startQuiz();
  }
});


startQuiz();