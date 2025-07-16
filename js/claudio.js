let currentPage = 0;
let currentAudio = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let pageCompleted = false;

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
  } else if (currentLayout === "Dlayout") {
    content = DLayOutGenerator(titles, page, text);
  } else if (currentLayout === "Elayout") {
    content = ELayOutGenerator(titles, page, text);
  } else if (currentLayout === "Flayout") {
    content = FLayOutGenerator(titles, page, text);
  } else if (currentLayout === "Glayout") {
    content = GLayOutGenerator(titles, page, text);
  } else if (currentLayout === "Glayout") {
    content = HLayOutGenerator(titles, page, text);
  }

  return content;
}
// Plantilla A
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
  // nextButton.disabled = true;
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
  // nextButton.disabled = true;
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
function DLayOutGenerator(titles, page, text) {
  const nextButton = document.getElementById("next-button");
  const pageData = text[page];
  // nextButton.disabled = true;
  return `
    <div id="Dlayout-container">
      <h1 class="titles" id="Dtitle">${titles[page]}</h1>
      <div class="match-pairs-container">
        <div class="game-header">
          <div class="game-stats">
            <div class="stat-item">
              <span class="stat-label">Intentos:</span>
              <span id="attempts-counter">0</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Parejas encontradas:</span>
              <span id="pairs-counter">0/${Math.floor(
                pageData.pairs.length
              )}</span>
            </div>
          </div>
          <div class="game-progress">
            <div class="progress-bar">
              <div id="match-progress-fill" class="progress-fill" style="width: 0%"></div>
            </div>
          </div>
        </div>
        
        <div class="match-instructions">
          <h3>Instrucciones:</h3>
          <p>Haz clic en las cartas para encontrar las parejas correctas. Cada carta tiene su pareja correspondiente.</p>
        </div>
        
        <div id="cards-grid" class="cards-grid">
          ${generateMatchCards(pageData.pairs)}
        </div>
        
        <div id="match-result" class="match-result" style="display: none;">
          <div id="game-completion-message" class="completion-message"></div>
          <div class="game-summary">
            <div class="summary-item">
              <strong>Tiempo total:</strong> <span id="total-time">--</span>
            </div>
            <div class="summary-item">
              <strong>Intentos totales:</strong> <span id="total-attempts">--</span>
            </div>
            <div class="summary-item">
              <strong>Precisión:</strong> <span id="accuracy">--</span>
            </div>
          </div>
          <button class="continue-btn" onclick="nextPage()">Continuar al Siguiente Tema</button>
        </div>
      </div>
    </div>`;
}

function ELayOutGenerator(titles, page, text) {
  const nextButton = document.getElementById("next-button");
  const pageData = text[page];
  // nextButton.disabled = true;

  // Initialize game state
  if (pageData && pageData.sentences) {
    initializeSentenceGame(pageData.sentences);
  }
  return `
    <div id="Elayout-container">
      <h1 class="titles" id="Etitle">${titles[page]}</h1>
      <div class="sentence-game-container">
        <div class="game-header">
          <div class="game-stats">
            <div class="stat-item">
              <span class="stat-label">Oraciones completadas:</span>
              <span id="sentence-counter">0/${
                pageData?.sentences?.length || 0
              }</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Intentos:</span>
              <span id="sentence-attempts">0</span>
            </div>
          </div>
          <div class="game-progress">
            <div class="progress-bar">
              <div id="sentence-progress-fill" class="progress-fill" style="width: 0%"></div>
            </div>
          </div>
        </div>
        
        <div class="sentence-instructions">
          <h3>Instrucciones:</h3>
          <p>Arrastra las partes de la oración para formar una oración completa con sentido lógico.</p>
        </div>
        
        <div id="sentence-game-area" class="sentence-game-area">
          ${generateSentenceGame(pageData)}
        </div>
        
        <div class="sentence-controls">
          <button id="check-sentence-btn" class="check-sentence-btn" onclick="checkSentence()">
            Verificar Oración
          </button>
          <button id="reset-sentence-btn" class="reset-sentence-btn" onclick="resetCurrentSentence()">
            Reiniciar Oración
          </button>
          <button id="next-sentence-btn" class="next-sentence-btn" onclick="nextSentence()" style="display: none;">
            Siguiente Oración
          </button>
        </div>
        
        <div id="sentence-result" class="sentence-result" style="display: none;">
          <div id="sentence-feedback" class="sentence-feedback"></div>
          <div id="sentence-explanation" class="sentence-explanation"></div>
        </div>
        
        <div id="sentence-game-summary" class="sentence-game-summary" style="display: none;">
          <h3>¡Juego Completado! 🎉</h3>
          <div id="sentence-score-display" class="sentence-score-display"></div>
          <div class="game-summary">
            <div class="summary-item">
              <strong>Tiempo total:</strong> <span id="sentence-total-time">--</span>
            </div>
            <div class="summary-item">
              <strong>Intentos totales:</strong> <span id="sentence-total-attempts">--</span>
            </div>
            <div class="summary-item">
              <strong>Oraciones completadas:</strong> <span id="sentences-completed">--</span>
            </div>
          </div>
          <button class="continue-btn" onclick="nextPage()">Continuar al Siguiente Tema</button>
        </div>
      </div>
    </div>`;
}
function FLayOutGenerator(titles, page, text) {
  const nextButton = document.getElementById("next-button");
  const pageData = text[page];
  // nextButton.disabled = true;

  // Initialize recipe game state
  if (pageData && pageData.recipe) {
    initializeRecipeGame(pageData.recipe);
  }

  return `
    <div id="Flayout-container">
      <h1 class="titles" id="Ftitle">${titles[page]}</h1>
      <div class="recipe-game-container">
        <div class="game-header">
          <div class="game-stats">
            <div class="stat-item">
              <span class="stat-label">Intentos:</span>
              <span id="recipe-attempts">0</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Pasos ordenados:</span>
              <span id="recipe-progress">0/${
                pageData?.recipe?.steps?.length || 0
              }</span>
            </div>
          </div>
          <div class="game-progress">
            <div class="progress-bar">
              <div id="recipe-progress-fill" class="progress-fill" style="width: 0%"></div>
            </div>
          </div>
        </div>
        
        <div class="recipe-instructions">
          <h3>Instrucciones:</h3>
          <p>Arrastra los pasos en el orden correcto para completar la receta o proceso.</p>
        </div>
        
        <div class="recipe-title">
          <h3>${pageData?.recipe?.title || "Ordena los pasos"}</h3>
          <p class="recipe-description">${
            pageData?.recipe?.description ||
            "Organiza los pasos en orden lógico"
          }</p>
        </div>
        
        <div class="recipe-game-area">
          <div class="recipe-columns">
            <div class="steps-column">
              <h4>Pasos disponibles:</h4>
              <div id="available-steps" class="available-steps">
                ${generateAvailableSteps(pageData?.recipe?.steps || [])}
              </div>
            </div>
            
            <div class="order-column">
              <h4>Orden correcto:</h4>
              <div id="ordered-steps" class="ordered-steps" ondrop="dropRecipeStep(event)" ondragover="allowRecipeDrop(event)">
                <div class="drop-zone-placeholder">Arrastra los pasos aquí en el orden correcto</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="recipe-controls">
          <button id="check-recipe-btn" class="check-recipe-btn" onclick="checkRecipeOrder()">
            Verificar Orden
          </button>
          <button id="reset-recipe-btn" class="reset-recipe-btn" onclick="resetRecipeGame()">
            Reiniciar
          </button>
        </div>
        
        <div id="recipe-result" class="recipe-result" style="display: none;">
          <div id="recipe-feedback" class="recipe-feedback"></div>
        </div>
        
        <div id="recipe-game-summary" class="recipe-game-summary" style="display: none;">
          <h3>¡Perfecto! 🎉</h3>
          <div id="recipe-score-display" class="recipe-score-display">
            <div class="completion-message">
              <h4>¡Has ordenado todos los pasos correctamente!</h4>
              <p>La secuencia está completa y tiene sentido lógico.</p>
            </div>
          </div>
          <div class="game-summary">
            <div class="summary-item">
              <strong>Tiempo total:</strong> <span id="recipe-total-time">--</span>
            </div>
            <div class="summary-item">
              <strong>Intentos:</strong> <span id="recipe-total-attempts">--</span>
            </div>
          </div>
          <button class="continue-btn" onclick="nextPage()">Continuar</button>
        </div>
      </div>
    </div>`;
}
function GLayOutGenerator(titles, page, text) {
  const nextButton = document.getElementById("next-button");
  const pageData = text[page];
  // nextButton.disabled = true;

  // Initialize phrase game state
  if (pageData && pageData.phrases) {
    initializePhraseGame(pageData.phrases);
  }

  return `
    <div id="Glayout-container">
      <h1 class="titles" id="Gtitle">${titles[page]}</h1>
      <div class="phrase-game-container">
        <div class="game-header">
          <div class="game-stats">
            <div class="stat-item">
              <span class="stat-label">Frases completadas:</span>
              <span id="phrase-counter">0/${
                pageData?.phrases?.length || 0
              }</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Intentos:</span>
              <span id="phrase-attempts">0</span>
            </div>
          </div>
          <div class="game-progress">
            <div class="progress-bar">
              <div id="phrase-progress-fill" class="progress-fill" style="width: 0%"></div>
            </div>
          </div>
        </div>
        
        <div class="phrase-instructions">
          <h3>Instrucciones:</h3>
          <p>Arrastra las palabras correctas para completar las frases. Cada palabra encaja en un lugar específico.</p>
        </div>
        
        <div id="phrase-game-area" class="phrase-game-area">
          ${generatePhraseGame(pageData)}
        </div>
        
        <div class="phrase-controls">
          <button id="check-phrase-btn" class="check-phrase-btn" onclick="checkPhrase()">
            Verificar Frase
          </button>
          <button id="reset-phrase-btn" class="reset-phrase-btn" onclick="resetCurrentPhrase()">
            Reiniciar Frase
          </button>
          <button id="next-phrase-btn" class="next-phrase-btn" onclick="nextPhrase()" style="display: none;">
            Siguiente Frase
          </button>
        </div>
        
        <div id="phrase-result" class="phrase-result" style="display: none;">
          <div id="phrase-feedback" class="phrase-feedback"></div>
          <div id="phrase-explanation" class="phrase-explanation"></div>
        </div>
        
        <div id="phrase-game-summary" class="phrase-game-summary" style="display: none;">
          <h3>¡Excelente trabajo! 🎉</h3>
          <div id="phrase-score-display" class="phrase-score-display">
            <div class="completion-message">
              <h4>¡Has completado todas las frases correctamente!</h4>
              <p>Tu comprensión del tema es excelente.</p>
            </div>
          </div>
          <div class="game-summary">
            <div class="summary-item">
              <strong>Tiempo total:</strong> <span id="phrase-total-time">--</span>
            </div>
            <div class="summary-item">
              <strong>Intentos totales:</strong> <span id="phrase-total-attempts">--</span>
            </div>
            <div class="summary-item">
              <strong>Frases completadas:</strong> <span id="phrases-completed">--</span>
            </div>
          </div>
          <button class="continue-btn" onclick="nextPage()">Continuar</button>
        </div>
      </div>
    </div>`;
}
function HLayOutGenerator(titles, page, text) {
  return ` 
  <div id="Hlayout-container">
  </div>`;
}



function resetTrivia() {
  currentQuestionIndex = 0;
  userAnswers = [];
  pageCompleted = false;
  resetMatchPairs();
  resetSentenceGame();
  resetRecipeGameState();
  resetPhraseGame();
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
