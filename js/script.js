let currentPage = 0;
let currentAudio = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let pageCompleted = false;

function renderPage() {
  const pageContent = document.getElementById("page-content");
  const headerElement = document.querySelector("header");
  const footerElement = document.querySelector("footer");
  const advButton = document.getElementById("adv-buttons");
  if (currentPage === 0) {
    headerElement.style.display = "none";
    advButton.style.display = "none";
    footerElement.style.display = "none";
  } else {
    advButton.style.display = "block";
    headerElement.style.display = "block";
    footerElement.style.display = "block";
  }
  pageContent.className = layoutData[currentPage];
  pageContent.innerHTML = createStructure(
    titlesData,
    layoutData,
    currentPage,
    textData
  );
  // playAudio(audioData, currentPage);
  console.log(currentPage);
}

//Siguiente pagina
function nextPage() {
  if (currentPage < Object.keys(titlesData).length - 1) {
    currentPage++;
    resetTrivia();
    resetAdvButtons();
    masterRender();
  }
}

//Pagina anterior
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    resetTrivia();
    resetAdvButtons();
    masterRender();
  }
}

//Pagina arbitraria
function setPage(value) {
  currentPage = value;
  masterRender();
}

function resetAdvButtons() {
  const nextButton = document.getElementById("next-button");
  nextButton.disabled = false;
}

//Crear el DOM dinamico
function createStructure(titles, layout, page, text) {
  let currentLayout = layout[page];
  let content = "";
  if (currentLayout === "Alayout") {
    content = ALayOutGenerator(titles, page);
  } else if (currentLayout === "Blayout") {
    content = BLayOutGenerator(titles, page, text);
  } else if (currentLayout === "Clayout") {
    content = CLayOutGenerator(titles, page, text);
  }
  return content;
}
// Plantilla B
function ALayOutGenerator(titles, page) {
  return ` 
  <div id="Alayout-container">
    <div class="button-caratula-container">
      <button class="nav-buttons" id="comenzar-button" onclick="nextPage()">Comienza</button>
    </div>
  </div>`;
}
function BLayOutGenerator(titles, page, text) {
  const nextButton = document.getElementById("next-button");
  const pageTrivia = text[page];
  const totalQuestions = pageTrivia.questions.length;
  const currentQuestion = pageTrivia.questions[currentQuestionIndex];
  nextButton.disabled = true;
  return `
    <div id="Blayout-container">
      <h1 class="titles" id="Btitle">${titles[page]}</h1>
      <div class="trivia-container">
        <div class="trivia-header">
          <div class="question-counter">
            Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${
              ((currentQuestionIndex + 1) / totalQuestions) * 100
            }%"></div>
          </div>
        </div>
        
        <div class="trivia-question">
          <h2>Selecciona la respuesta correcta:</h2>
          <p class="question-text">${currentQuestion.question}</p>
        </div>
        
        <div class="trivia-buttons multiple-choice">
          ${console.log(currentQuestion)}
          ${currentQuestion.options
            .map(
              (option, index) => `
            <button class="trivia-btn option-btn" 
                    onclick="answerMultipleChoice(${index})" 
                    ${pageCompleted ? "disabled" : ""}
                    data-option="${index}">
              ${option}
            </button>
          `
            )
            .join("")}
        </div>
        
        <div id="question-result" class="question-result" style="display: none;">
          <div id="result-message" class="result-message"></div>
          <div id="explanation" class="explanation"></div>
          <div class="navigation-buttons">
            <button id="next-question-btn" class="next-question-btn" onclick="nextQuestion()">
              Siguiente Pregunta
            </button>
          </div>
        </div>
        
        <div id="quiz-summary" class="quiz-summary" style="display: none;">
          <h3>¡Quiz Completado!</h3>
          <div id="score-display" class="score-display"></div>
          <div id="answers-review" class="answers-review"></div>
          <button class="continue-btn" onclick="nextPage()">Continuar al Siguiente Tema</button>
        </div>
      </div>
    </div>`;
}

function CLayOutGenerator(titles, page, text) {
  const nextButton = document.getElementById("next-button");
  const pageTrivia = text[page];
  const totalQuestions = pageTrivia.questions.length;
  const currentQuestion = pageTrivia.questions[currentQuestionIndex];
  nextButton.disabled = true;
  return `
    <div id="Clayout-container">
      <h1 class="titles" id="Ctitle">${titles[page]}</h1>
      <div class="trivia-container">
        <div class="trivia-header">
          <div class="question-counter">
            Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${
              ((currentQuestionIndex + 1) / totalQuestions) * 100
            }%"></div>
          </div>
        </div>
        
        <div class="trivia-question">
          <h2>¿Verdadero o Falso?</h2>
          <p class="question-text">${currentQuestion.question}</p>
        </div>
        
        <div class="trivia-buttons">
          <button class="trivia-btn true-btn" onclick="answerQuestion(true)" ${
            pageCompleted ? "disabled" : ""
          }>
            Verdadero
          </button>
          <button class="trivia-btn false-btn" onclick="answerQuestion(false)" ${
            pageCompleted ? "disabled" : ""
          }>
            Falso
          </button>
        </div>
        
        <div id="question-result" class="question-result" style="display: none;">
          <div id="result-message" class="result-message"></div>
          <div id="explanation" class="explanation"></div>
          <div class="navigation-buttons">
            <button id="next-question-btn" class="next-question-btn" onclick="nextQuestion()">
              Siguiente Pregunta
            </button>
          </div>
        </div>
        
        <div id="quiz-summary" class="quiz-summary" style="display: none;">
          <h3>¡Quiz Completado!</h3>
          <div id="score-display" class="score-display"></div>
          <div id="answers-review" class="answers-review"></div>
          <button class="continue-btn" onclick="nextPage()">Continuar al Siguiente Tema</button>
        </div>
      </div>
    </div>`;
}
// Handle multiple choice question answers
function answerMultipleChoice(selectedOption) {
  const pageTrivia = textData[currentPage];
  const currentQuestion = pageTrivia.questions[currentQuestionIndex];
  const isCorrect = selectedOption === currentQuestion.correctAnswer;

  // Store the answer
  userAnswers[currentQuestionIndex] = {
    userAnswer: selectedOption,
    correct: isCorrect,
    question: currentQuestion.question,
    explanation: currentQuestion.explanation,
    selectedOption: currentQuestion.options[selectedOption],
    correctOption: currentQuestion.options[currentQuestion.correctAnswer],
  };

  // Show result for current question
  showMultipleChoiceResult(selectedOption, currentQuestion);

  // Disable buttons
  const buttons = document.querySelectorAll(".trivia-btn");
  buttons.forEach((btn) => (btn.disabled = true));
}
// Handle individual question answers
function answerQuestion(answer) {
  const pageTrivia = textData[currentPage];
  const currentQuestion = pageTrivia.questions[currentQuestionIndex];

  // Store the answer
  userAnswers[currentQuestionIndex] = {
    userAnswer: answer,
    correct: answer === currentQuestion.answer,
    question: currentQuestion.question,
    explanation: currentQuestion.explanation,
  };

  // Show result for current question
  showQuestionResult(answer, currentQuestion);

  // Disable buttons
  const buttons = document.querySelectorAll(".trivia-btn");
  buttons.forEach((btn) => (btn.disabled = true));
}

// Show result for multiple choice questions
function showMultipleChoiceResult(selectedOption, questionData) {
  const resultDiv = document.getElementById("question-result");
  const messageDiv = document.getElementById("result-message");
  const explanationDiv = document.getElementById("explanation");
  const nextBtn = document.getElementById("next-question-btn");

  const isCorrect = selectedOption === questionData.correctAnswer;

  // Update result message
  if (isCorrect) {
    messageDiv.innerHTML = '<span class="correct">¡Correcto!</span>';
    messageDiv.className = "result-message correct";
  } else {
    messageDiv.innerHTML = '<span class="incorrect">Incorrecto</span>';
    messageDiv.className = "result-message incorrect";
  }

  explanationDiv.textContent = questionData.explanation;

  // Highlight buttons
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn, index) => {
    if (index === questionData.correctAnswer) {
      btn.classList.add("correct-answer");
    } else if (index === selectedOption && !isCorrect) {
      btn.classList.add("wrong-answer");
    }
  });

  // Update next button text
  const totalQuestions = textData[currentPage].questions.length;
  if (currentQuestionIndex < totalQuestions - 1) {
    nextBtn.textContent = "Siguiente Pregunta";
  } else {
    nextBtn.textContent = "Ver Resultados";
  }

  // Show result section
  resultDiv.style.display = "block";
}

// Show result for true/false questions

function showQuestionResult(userAnswer, questionData) {
  const resultDiv = document.getElementById("question-result");
  const messageDiv = document.getElementById("result-message");
  const explanationDiv = document.getElementById("explanation");
  const nextBtn = document.getElementById("next-question-btn");

  const isCorrect = userAnswer === questionData.answer;

  // Update result message
  if (isCorrect) {
    messageDiv.innerHTML = '<span class="correct">¡Correcto!</span>';
    messageDiv.className = "result-message correct";
  } else {
    messageDiv.innerHTML = '<span class="incorrect">Incorrecto</span>';
    messageDiv.className = "result-message incorrect";
  }

  explanationDiv.textContent = questionData.explanation;

  // Highlight buttons
  const correctBtn = questionData.answer
    ? document.querySelector(".true-btn")
    : document.querySelector(".false-btn");
  correctBtn.classList.add("correct-answer");

  if (!isCorrect) {
    const wrongBtn = userAnswer
      ? document.querySelector(".true-btn")
      : document.querySelector(".false-btn");
    wrongBtn.classList.add("wrong-answer");
  }

  // Update next button text
  const totalQuestions = textData[currentPage].questions.length;
  if (currentQuestionIndex < totalQuestions - 1) {
    nextBtn.textContent = "Siguiente Pregunta";
  } else {
    nextBtn.textContent = "Ver Resultados";
  }

  // Show result section
  resultDiv.style.display = "block";
}

function nextQuestion() {
  const totalQuestions = textData[currentPage].questions.length;

  if (currentQuestionIndex < totalQuestions - 1) {
    // Move to next question
    currentQuestionIndex++;
    refreshCurrentQuestion();
  } else {
    // Show final results
    showQuizSummary();
  }
}

function refreshCurrentQuestion() {
  const pageTrivia = textData[currentPage];
  const currentQuestion = pageTrivia.questions[currentQuestionIndex];
  const totalQuestions = pageTrivia.questions.length;
  const currentLayout = layoutData[currentPage];

  // Update question counter and progress
  const questionCounter = document.querySelector(".question-counter");
  const progressFill = document.querySelector(".progress-fill");
  const questionText = document.querySelector(".question-text");

  if (questionCounter) {
    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}`;
  }
  
  if (progressFill) {
    progressFill.style.width = `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`;
  }

  if (questionText) {
    questionText.textContent = currentQuestion.question;
  }

  // For multiple choice questions (B layout), regenerate the entire button container
  if (currentLayout === "Blayout" && currentQuestion.options) {
    const buttonContainer = document.querySelector(".trivia-buttons.multiple-choice");
    if (buttonContainer) {
      buttonContainer.innerHTML = currentQuestion.options.map((option, index) => `
        <button class="trivia-btn option-btn" 
                onclick="answerMultipleChoice(${index})" 
                data-option="${index}">
          ${option}
        </button>
      `).join('');
    }
  } else {
    // For true/false questions (C layout), just reset the existing buttons
    const buttons = document.querySelectorAll(".trivia-btn");
    buttons.forEach((btn) => {
      btn.disabled = false;
      btn.classList.remove("correct-answer", "wrong-answer");
    });
  }

  // Hide result section
  const resultDiv = document.getElementById("question-result");
  if (resultDiv) {
    resultDiv.style.display = "none";
  }
}

function showQuizSummary() {
  pageCompleted = true;

  const resultDiv = document.getElementById("question-result");
  const summaryDiv = document.getElementById("quiz-summary");
  const scoreDisplay = document.getElementById("score-display");
  const answersReview = document.getElementById("answers-review");
  const nextButton = document.getElementById("next-button");
  nextButton.disabled = false;
  // Hide individual question result
  resultDiv.style.display = "none";

  // Calculate score
  const correctAnswers = userAnswers.filter((answer) => answer.correct).length;
  const totalQuestions = userAnswers.length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  // Display score
  scoreDisplay.innerHTML = `
    <div class="score-text">
      Tu puntuación: ${correctAnswers}/${totalQuestions} (${percentage}%)
    </div>
    <div class="score-bar">
      <div class="score-fill" style="width: ${percentage}%"></div>
    </div>
  `;

  // Generate answers review
  let reviewHTML = "<h4>Revisión de Respuestas:</h4>";
  userAnswers.forEach((answer, index) => {
    const icon = answer.correct ? "✅" : "❌";
    reviewHTML += `
      <div class="answer-review-item ${
        answer.correct ? "correct" : "incorrect"
      }">
        <div class="review-header">
          ${icon} Pregunta ${index + 1}
        </div>
        <div class="review-question">${answer.question}</div>
        <div class="review-explanation">${answer.explanation}</div>
      </div>
    `;
  });

  answersReview.innerHTML = reviewHTML;

  // Show summary
  summaryDiv.style.display = "block";
}

function resetTrivia() {
  currentQuestionIndex = 0;
  userAnswers = [];
  pageCompleted = false;
}

function playAudio(audioData, page) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }

  // Create and play new audio
  const newAudio = new Audio(audioData[page]);
  newAudio.play();
  currentAudio = newAudio;
}

function masterRender() {
  renderPage();
  // const pointedButton = document.getElementById("buttonParag1");
  // if (pointedButton && currentParagNumber === 1) {
  //   pointedButton.style.backgroundColor = "#1d3e8b";
  // }
}
masterRender();
