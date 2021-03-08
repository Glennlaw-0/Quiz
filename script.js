const quizData = [
  {
    question: "What is Glenn's last name?",
    a: 'Johnson',
    b: 'Cruz',
    c: 'Law',
    d: 'Womack',
    correct: 'c',
  },
  {
    question: 'What year was Glenn born?',
    a: '1998',
    b: '1987',
    c: '1986',
    d: '1985',
    correct: 'b',
  },
  {
    question: 'Where was Glenn Born?',
    a: 'Texas',
    b: 'Hawaii',
    c: 'Idiana',
    d: 'New York',
    correct: 'd',
  },
  {
    question: "Which is Glenn's favorite sport?",
    a: 'Football',
    b: 'Basketball',
    c: 'Soccer',
    d: 'Baseball',
    correct: 'a',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.querySelector('.question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  // Check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        
        <button onclick="location.reload()">Reload</button>
    `;
    }
  }
});
