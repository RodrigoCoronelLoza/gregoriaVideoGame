let currentPage = 0;
let currentAudio = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let pageCompleted = false;
let coins = 1000;
const lostCoins = 50;

let currentSentenceIndex = 0;
let sentenceFragments = [];
let correctOrder = [];
let draggedElement = null;
let sentenceGameCompleted = false;
let sentenceGameStartTime = null;
let sentenceAttempts = 0;
let completedSentences = 0;

let recipeGameCompleted = false;
let recipeGameStartTime = null;
let recipeAttempts = 0;
let recipeSteps = [];
let recipeCorrectOrder = [];
let recipeDraggedElement = null;

let phraseGameCompleted = false;
let phraseGameStartTime = null;
let phraseAttempts = 0;
let currentPhraseIndex = 0;
let completedPhrases = 0;
let phraseGameData = null;
let phraseDraggedElement = null;

// Memory game variables
let memoryGameCompleted = false;
let memoryGameStartTime = null;
let memoryAttempts = 0;
let memoryFlippedCards = [];
let memoryMatchedPairs = 0;
let memoryCards = [];
let memoryGameInProgress = false;

currentTitlesData = titlesVData;
currentLayoutData = layoutVData;
currentIntructionsData = instructionsVData;
currentFeedbackData = feedbackVData;
currentHistoryData = historyVData;
currentTextData = textVData;
currentImagesData = imagesVData;
currentJumpsData = jumpsVData;

function renderPage() {
  const pageContent = document.getElementById("page-content");
  const headerElement = document.querySelector("header");
  const advButton = document.getElementById("adv-buttons");
  if (currentPage === 0 && currentLayoutData === layoutVData) {
    headerElement.style.display = "none";
    advButton.style.display = "none";
  } else {
    advButton.style.display = "block";
    headerElement.style.display = "block";
  }
  pageContent.className = currentLayoutData[currentPage];
  pageContent.innerHTML = createStructure(
    currentTitlesData,
    currentLayoutData,
    currentPage,
    currentTextData,
    currentHistoryData,
    currentIntructionsData,
    currentFeedbackData,
    currentImagesData,
    currentJumpsData
  );
  // playAudio(audioData, currentPage);
  console.log(currentPage);
}

//Siguiente pagina
function nextPage() {
  if (currentPage < Object.keys(currentLayoutData).length - 1) {
    if (currentLayoutData !== layoutVData) {
      coins = coins - lostCoins;
    }
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
function createStructure(
  titles,
  layout,
  page,
  text,
  history,
  instructions,
  feedback,
  images,
  jumps
) {
  let currentLayout = layout[page];
  let content = "";
  if (currentLayout === "Alayout") {
    content = ALayOutGenerator(titles, page, images);
  } else if (currentLayout === "Blayout") {
    content = BLayOutGenerator(titles, page, text, history, images);
  } else if (currentLayout === "Clayout") {
    content = CLayOutGenerator(
      titles,
      page,
      text,
      history,
      instructions,
      images
    );
  } else if (currentLayout === "Dlayout") {
    content = DLayOutGenerator(
      titles,
      page,
      text,
      history,
      instructions,
      feedback,
      images
    );
  } else if (currentLayout === "Elayout") {
    content = ELayOutGenerator(
      titles,
      page,
      text,
      history,
      instructions,
      feedback,
      images
    );
  } else if (currentLayout === "Flayout") {
    content = FLayOutGenerator(
      titles,
      page,
      text,
      history,
      instructions,
      feedback,
      images
    );
  } else if (currentLayout === "Glayout") {
    content = GLayOutGenerator(titles, page, text, history, images);
  } else if (currentLayout === "Hlayout") {
    content = HLayOutGenerator(
      titles,
      page,
      text,
      history,
      instructions,
      feedback,
      images
    );
  } else if (currentLayout === "Xlayout") {
    content = XLayOutGenerator(titles, page, text, history, images);
  } else if (currentLayout === "Ilayout") {
    content = ILayOutGenerator(titles, page, text, history, images);
  } else if (currentLayout === "Jlayout") {
    content = JLayOutGenerator(titles, page, text, history, images);
  } else if (currentLayout === "Klayout") {
    content = KLayOutGenerator(titles, page, text, history, images, jumps);
  } else if (currentLayout === "Llayout") {
    content = LLayOutGenerator(titles, page, text, history, images, jumps);
  }
  return content;
}
// Plantilla A
function ALayOutGenerator(titles, page, images) {
  document.querySelector(
    ".Alayout"
  ).style.backgroundImage = `url('images/${images[page]}')`;
  return ` 
  <div id="Alayout-container">
    <div class="button-caratula-container">
      <button class="nav-buttons" id="comenzar-button" onclick="nextPage()">Comienza</button>
    </div>
  </div>
  <h1>${titles[page]}</h1>`;
}



// Plantilla B
function BLayOutGenerator(titles, page, text, history, images) {
  const nextButton = document.getElementById("next-button");
  const pageTrivia = text[page];
  const totalQuestions = pageTrivia.questions.length;
  const currentQuestion = pageTrivia.questions[currentQuestionIndex];
  // nextButton.disabled = true;
  document.querySelector(
    ".Blayout"
  ).style.backgroundImage = `url('images/${images[page]}')`;
  return `
    <div id="Blayout-container">
      <div id="coins-container">
        <div id="image-coins-container">
          <img id="image-coins" src="images/banana.jpg"/>
        </div>
        <div id="number-coins-container">
          ${coins}
        </div>
      </div>
      <div id="key-buttons-container">
        <div id="button-historia-container">
          <button class="key-buttons" id="historia-button"  onclick="toggleSidebarLeft()">HISTORIA</button>
        </div>
        <div id="middle-part">
        </div>
        <div id="button-desafio-container">
          <button class="key-buttons" id="desafio-button" onclick="toggleSidebarRight()" >DESAFÍO</button>
        </div>
      </div>
      <div id="sidebar-left">
        <div id="sidebar-left-corpus">
          
          <div id="historia-container">
            <div id="button-historia-close-container">
              <button id="historia-close-button" onclick="toggleSidebarLeft()" >X</button>
            </div>
            <div id="text-historia">
              <p>${history[page]}</p>
            </div> 
        </div>
        <div id="tab-historia">
          <div id="button-historia-container">
            <button class="key-buttons" id="historia-button2"  onclick="toggleSidebarLeft()">HISTORIA</button>
          </div>
        </div>
      </div>
    </div>

    <div id="sidebar-right">
      <div id="sidebar-right-corpus">
        <div id="tab-desafio">
          <div id="button-desafio-container">
            <button class="key-buttons" id="desafio-button2" onclick="toggleSidebarRight()" >DESAFÍO</button>
          </div>
        </div>
        <div id="game-container">
          <div id="button-desafio-close-container">
            <button id="desafio-close-button" onclick="toggleSidebarRight()" >X</button>
          </div>
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
        </div>
      </div>
    </div>    
  </div>
  <h1>${titles[page]}</h1>`;
}

// Plantilla C



function selectPersonaje(newLayout, numberOfPage) {
  currentTitlesData = eval("titles" + newLayout + "Data");
  currentLayoutData = eval("layout" + newLayout + "Data");
  currentIntructionsData = eval("instructions" + newLayout + "Data");
  currentFeedbackData = eval("feedback" + newLayout + "Data");
  currentHistoryData = eval("history" + newLayout + "Data");
  currentTextData = eval("text" + newLayout + "Data");
  currentImagesData = eval("images" + newLayout + "Data");
  currentJumpsData = eval("jumps" + newLayout + "Data");
  currentPage = numberOfPage;

  if (newLayout === "B") {
    document.documentElement.style.setProperty("--colorvar1", "#5e7547");
    document.documentElement.style.setProperty("--colorvar2", "#172601");
  }
  masterRender();
}

// function selectPersonaje2(newLayout, numberOfPage) {
//   currentTitlesData = eval("titles" + newLayout + "Data");
//   currentLayoutData = eval("layout" + newLayout + "Data");
//   currentIntructionsData = eval("instructions" + newLayout + "Data");
//   currentFeedbackData = eval("feedback" + newLayout + "Data");
//   currentHistoryData = eval("history" + newLayout + "Data");
//   currentTextData = eval("text" + newLayout + "Data");
//   currentImagesData = eval("images" + newLayout + "Data");
//   currentJumpsData = eval("jumps" + newLayout + "Data");
//   currentPage = numberOfPage;
//   masterRender();
// }

function toggleSidebarLeft() {
  document.getElementById("sidebar-left").classList.toggle("open");
  // console.log(document.getElementById("sidebar-right"));
  if (document.getElementById("sidebar-right").classList.contains("open")) {
    document.getElementById("sidebar-right").classList.toggle("open");
  }
  //document.getElementById("sidebar-right").classList.toggle("open");
}

function toggleSidebarRight() {
  document.getElementById("sidebar-right").classList.toggle("open");
  //document.getElementById("sidebar-left").classList.toggle("open");
  if (document.getElementById("sidebar-left").classList.contains("open")) {
    document.getElementById("sidebar-left").classList.toggle("open");
  }
}


// Handle multiple choice question answers
function answerMultipleChoice(selectedOption) {
  const pageTrivia = currentTextData[currentPage];
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
  const pageTrivia = currentTextData[currentPage];
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
  const totalQuestions = currentTextData[currentPage].questions.length;
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
  const totalQuestions = currentTextData[currentPage].questions.length;
  if (currentQuestionIndex < totalQuestions - 1) {
    nextBtn.textContent = "Siguiente Pregunta";
  } else {
    nextBtn.textContent = "Ver Resultados";
  }

  // Show result section
  resultDiv.style.display = "block";
}

function nextQuestion() {
  const totalQuestions = currentTextData[currentPage].questions.length;

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
  const pageTrivia = currentTextData[currentPage];
  const currentQuestion = pageTrivia.questions[currentQuestionIndex];
  const totalQuestions = pageTrivia.questions.length;
  const currentLayout = currentLayoutData[currentPage];

  // Update question counter and progress
  const questionCounter = document.querySelector(".question-counter");
  const progressFill = document.querySelector(".progress-fill");
  const questionText = document.querySelector(".question-text");

  if (questionCounter) {
    questionCounter.textContent = `Pregunta ${
      currentQuestionIndex + 1
    } de ${totalQuestions}`;
  }

  if (progressFill) {
    progressFill.style.width = `${
      ((currentQuestionIndex + 1) / totalQuestions) * 100
    }%`;
  }

  if (questionText) {
    questionText.textContent = currentQuestion.question;
  }

  // For multiple choice questions (B layout), regenerate the entire button container
  if (currentLayout === "Blayout" && currentQuestion.options) {
    const buttonContainer = document.querySelector(
      ".trivia-buttons.multiple-choice"
    );
    if (buttonContainer) {
      buttonContainer.innerHTML = currentQuestion.options
        .map(
          (option, index) => `
        <button class="trivia-btn option-btn" 
                onclick="answerMultipleChoice(${index})" 
                data-option="${index}">
          ${option}
        </button>
      `
        )
        .join("");
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
  resetMatchPairs();
  resetSentenceGame();
  resetRecipeGameState();
  resetPhraseGame();
  resetMemoryGame();
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
