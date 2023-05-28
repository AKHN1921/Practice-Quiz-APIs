// keeps track of what question we're on
var currentQuestionIndex = 0;
//this is how much time (seconds)
var time = 100;
var timerId;

// variables that = DOM elements that connects to html 
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');


function startQuiz() {
  var startScreenEl = document.getElementById('start-screen');
  startScreenEl.setAttribute('class', 'hide');

  questionsEl.removeAttribute('class');

  // resets timer after 1000 milliseconds
  timerId = setInterval(clockTick, 1000);
  
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // refer to questions.js
  var currentQuestion = questions[currentQuestionIndex];

  // current questions title
  var titleEl = document.getElementById('question-title');
  titleEl.textContent = currentQuestion.title;

  // clears old choices
  choicesEl.innerHTML = '';

  // loop over choices
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    // buttons for each choice
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;
    // ex: 1. placeholder 1
    

    // show choices
    choicesEl.appendChild();
  }
}

function questionClick(event) {
  var buttonEl = event.target;

  // do nothing if not clicking a choice button
  if (!buttonEl.matches('.choice')) {
    return;
  }

// needs more code, check read me
}

function quizEnd() {
  //
 

  var endScreenEl = document.getElementById('end-screen');
  endScreenEl.removeAttribute('class');


  var finalScoreEl = document.getElementById('final-score');
  finalScoreEl.textContent = time;
  
  questionsEl.removeAttribute('class');
}

function clockTick() {
  // 
  // 
  timerEl.textContent = ; // 

  //
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  //
  var initials = initialsEl.value.trim();

  // fix
  if () {

    
    
    var highscores =
      JSON.parse()  || [];

    
    var newScore = {
      score: time,
      initials: initials,
    };


    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(/* fix */));

    // goes to next page
    window.location.href = '';
  }
}

function checkForEnter(event) {
  // 
  if (event.key === 'Enter') {
    saveHighscore();
  }
}

// click to submit initials
submitBtn.onclick = saveHighscore;

// click to start quiz
startBtn.onclick = startQuiz;

// click to select choices
choicesEl.onclick = questionClick;

initialsEl.onkeyup = checkForEnter;
