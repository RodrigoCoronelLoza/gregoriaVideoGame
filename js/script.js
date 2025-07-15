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
function FLayOutGenerator(titles, page,text) {
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

// Initialize recipe game
function initializeRecipeGame(recipe) {
  if (!recipe || !recipe.steps || recipe.steps.length === 0) return;

  recipeGameCompleted = false;
  recipeGameStartTime = null;
  recipeAttempts = 0;
  recipeSteps = [...recipe.steps];
  recipeCorrectOrder = recipe.steps.map((_, index) => index);
}

// Generate available steps (shuffled)
function generateAvailableSteps(steps) {
  if (!steps || steps.length === 0) return "";

  // Create shuffled array with original indices
  const shuffledSteps = steps.map((step, index) => ({
    content: step,
    originalIndex: index
  }));
  
  // Shuffle the array
  for (let i = shuffledSteps.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledSteps[i], shuffledSteps[j]] = [shuffledSteps[j], shuffledSteps[i]];
  }

  return shuffledSteps.map(step => `
    <div class="recipe-step-card" 
         draggable="true"
         ondragstart="recipeStepDragStart(event)"
         data-step-content="${step.content}"
         data-original-index="${step.originalIndex}">
      <div class="step-number">Paso</div>
      <div class="step-content">${step.content}</div>
    </div>
  `).join("");
}

// Drag and drop functions for recipe game
function recipeStepDragStart(event) {
  if (recipeGameCompleted) return;

  // Start timer on first interaction
  if (!recipeGameStartTime) {
    recipeGameStartTime = Date.now();
  }

  recipeDraggedElement = event.target;
  event.dataTransfer.setData("text/plain", event.target.dataset.stepContent);
  event.dataTransfer.setData("originalIndex", event.target.dataset.originalIndex);
}

function allowRecipeDrop(event) {
  event.preventDefault();
}

function dropRecipeStep(event) {
  event.preventDefault();

  if (!recipeDraggedElement || recipeGameCompleted) return;

  const orderedSteps = document.getElementById("ordered-steps");
  const stepContent = event.dataTransfer.getData("text/plain");
  const originalIndex = event.dataTransfer.getData("originalIndex");

  // Create ordered step element
  const stepElement = document.createElement("div");
  stepElement.className = "ordered-step";
  stepElement.innerHTML = `
    <div class="ordered-step-number">${orderedSteps.children.length}</div>
    <div class="ordered-step-content">${stepContent}</div>
    <button class="remove-step-btn" onclick="removeRecipeStep(this)">×</button>
  `;
  stepElement.dataset.stepContent = stepContent;
  stepElement.dataset.originalIndex = originalIndex;

  orderedSteps.appendChild(stepElement);

  // Hide the dragged element
  recipeDraggedElement.style.display = "none";

  // Hide placeholder if there are steps
  const placeholder = document.querySelector(".drop-zone-placeholder");
  if (placeholder && orderedSteps.children.length > 1) { // >1 because placeholder is also a child
    placeholder.style.display = "none";
  }

  // Update step numbers
  updateStepNumbers();

  recipeDraggedElement = null;
}

// Remove step from ordered list
function removeRecipeStep(button) {
  const stepElement = button.parentElement;
  const stepContent = stepElement.dataset.stepContent;

  // Show the original step again
  const originalStep = document.querySelector(`[data-step-content="${stepContent}"]`);
  if (originalStep && originalStep !== stepElement) {
    originalStep.style.display = "block";
  }

  // Remove the ordered step
  stepElement.remove();

  // Update step numbers
  updateStepNumbers();

  // Show placeholder if no steps
  const orderedSteps = document.getElementById("ordered-steps");
  const placeholder = document.querySelector(".drop-zone-placeholder");
  if (placeholder && orderedSteps.children.length === 1) { // Only placeholder left
    placeholder.style.display = "block";
  }
}

// Update step numbers in ordered list
function updateStepNumbers() {
  const orderedSteps = document.querySelectorAll(".ordered-step");
  orderedSteps.forEach((step, index) => {
    const numberElement = step.querySelector(".ordered-step-number");
    if (numberElement) {
      numberElement.textContent = index + 1;
    }
  });
}

// Check if recipe order is correct
function checkRecipeOrder() {
  const orderedSteps = document.querySelectorAll(".ordered-step");
  const pageData = textData[currentPage];
  const totalSteps = pageData.recipe.steps.length;

  if (orderedSteps.length === 0) {
    showRecipeFeedback(false, "Debes arrastrar al menos un paso.");
    return;
  }

  if (orderedSteps.length !== totalSteps) {
    showRecipeFeedback(false, "Debes ordenar todos los pasos.");
    return;
  }

  recipeAttempts++;
  updateRecipeAttempts();

  // Check if order is correct
  const userOrder = Array.from(orderedSteps).map(step => 
    parseInt(step.dataset.originalIndex)
  );
  
  const isCorrect = userOrder.every((index, pos) => index === pos);

  if (isCorrect) {
    showRecipeFeedback(true, "¡Excelente! Has ordenado todos los pasos correctamente.");
    setTimeout(() => completeRecipeGame(), 1500);
  } else {
    showRecipeFeedback(false, "El orden no es correcto. Revisa la secuencia lógica de los pasos.");
  }
}

// Show feedback for recipe game
function showRecipeFeedback(isCorrect, message) {
  const resultDiv = document.getElementById("recipe-result");
  const feedbackDiv = document.getElementById("recipe-feedback");

  feedbackDiv.innerHTML = `
    <div class="feedback-message ${isCorrect ? "correct" : "incorrect"}">
      ${isCorrect ? "✅" : "❌"} ${message}
    </div>
  `;

  resultDiv.style.display = "block";

  // Disable buttons temporarily if correct
  if (isCorrect) {
    document.getElementById("check-recipe-btn").disabled = true;
    document.getElementById("reset-recipe-btn").disabled = true;
  }
}

// Complete recipe game
function completeRecipeGame() {
  recipeGameCompleted = true;
  const nextButton = document.getElementById("next-button");
  nextButton.disabled = false;

  // Calculate statistics
  const endTime = Date.now();
  const totalTime = Math.round((endTime - recipeGameStartTime) / 1000);

  // Update summary statistics
  document.getElementById("recipe-total-time").textContent = `${totalTime} segundos`;
  document.getElementById("recipe-total-attempts").textContent = recipeAttempts;

  // Show completion summary
  document.getElementById("recipe-game-summary").style.display = "block";
  
  // Hide other elements
  document.querySelector(".recipe-game-area").style.display = "none";
  document.querySelector(".recipe-controls").style.display = "none";
  document.getElementById("recipe-result").style.display = "none";
}

// Reset recipe game
function resetRecipeGame() {
  // Clear ordered steps
  const orderedSteps = document.getElementById("ordered-steps");
  orderedSteps.innerHTML = '<div class="drop-zone-placeholder">Arrastra los pasos aquí en el orden correcto</div>';

  // Show all available steps
  const availableSteps = document.querySelectorAll(".recipe-step-card");
  availableSteps.forEach(step => {
    step.style.display = "block";
  });

  // Hide result
  document.getElementById("recipe-result").style.display = "none";

  // Re-enable buttons
  document.getElementById("check-recipe-btn").disabled = false;
  document.getElementById("reset-recipe-btn").disabled = false;

  // Reset counters
  updateRecipeAttempts();
}

// Update recipe attempts counter
function updateRecipeAttempts() {
  const counter = document.getElementById("recipe-attempts");
  if (counter) {
    counter.textContent = recipeAttempts;
  }
}

// Add this to your resetTrivia function
function resetRecipeGameState() {
  recipeGameCompleted = false;
  recipeGameStartTime = null;
  recipeAttempts = 0;
  recipeSteps = [];
  recipeCorrectOrder = [];
  recipeDraggedElement = null;
}


// Initialize sentence game
function initializeSentenceGame(sentences) {
  if (!sentences || sentences.length === 0) return;

  currentSentenceIndex = 0;
  sentenceGameCompleted = false;
  sentenceGameStartTime = null;
  sentenceAttempts = 0;
  completedSentences = 0;
}

// Generate the sentence game HTML
function generateSentenceGame(pageData) {
  if (!pageData || !pageData.sentences || pageData.sentences.length === 0) {
    return '<div class="no-sentences">No hay oraciones disponibles para este juego.</div>';
  }

  const currentSentence = pageData.sentences[currentSentenceIndex];

  return `
    <div class="current-sentence-container">
      <div class="sentence-number">
        Oración ${currentSentenceIndex + 1} de ${pageData.sentences.length}
      </div>
      
      <div class="sentence-hint">
        <strong>Tema:</strong> ${
          currentSentence.hint ||
          "Organiza las partes para formar una oración coherente"
        }
      </div>
      
      <div id="drop-zone" class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div class="drop-zone-placeholder">Arrastra aquí las partes de la oración en el orden correcto</div>
        <div id="sentence-slots" class="sentence-slots"></div>
      </div>
      
      <div class="fragments-container">
        <div class="fragments-title">Partes de la oración:</div>
        <div id="sentence-fragments" class="sentence-fragments">
          ${generateFragments(currentSentence.fragments)}
        </div>
      </div>
      
      <div class="completed-sentence-preview" id="completed-sentence-preview" style="display: none;">
        <div class="preview-title">Oración formada:</div>
        <div id="preview-text" class="preview-text"></div>
      </div>
    </div>
  `;
}

// Generate fragment cards
function generateFragments(fragments) {
  if (!fragments || fragments.length === 0) return "";

  // Shuffle fragments for display
  const shuffledFragments = shuffleArray([...fragments]);

  return shuffledFragments
    .map(
      (fragment, index) => `
    <div class="sentence-fragment" 
         draggable="true" 
         ondragstart="dragStart(event)"
         data-fragment="${fragment}"
         data-original-index="${fragments.indexOf(fragment)}">
      ${fragment}
    </div>
  `
    )
    .join("");
}

// Drag and drop functions
function dragStart(event) {
  if (sentenceGameCompleted) return;

  // Start timer on first interaction
  if (!sentenceGameStartTime) {
    sentenceGameStartTime = Date.now();
  }

  draggedElement = event.target;
  event.dataTransfer.setData("text/plain", event.target.dataset.fragment);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();

  if (!draggedElement || sentenceGameCompleted) return;

  const dropZone = document.getElementById("sentence-slots");
  const droppedFragment = event.dataTransfer.getData("text/plain");

  // Create slot for dropped fragment
  const fragmentSlot = document.createElement("div");
  fragmentSlot.className = "fragment-slot";
  fragmentSlot.innerHTML = `
    <span class="slot-content">${droppedFragment}</span>
    <button class="remove-fragment-btn" onclick="removeFragment(this)">×</button>
  `;
  fragmentSlot.dataset.fragment = droppedFragment;
  fragmentSlot.dataset.originalIndex = draggedElement.dataset.originalIndex;

  dropZone.appendChild(fragmentSlot);

  // Hide the dragged element
  draggedElement.style.display = "none";

  // Update preview
  updateSentencePreview();

  // Hide placeholder if there are fragments
  const placeholder = document.querySelector(".drop-zone-placeholder");
  if (placeholder && dropZone.children.length > 0) {
    placeholder.style.display = "none";
  }

  draggedElement = null;
}

// Remove fragment from drop zone
function removeFragment(button) {
  const slot = button.parentElement;
  const fragment = slot.dataset.fragment;

  // Show the original fragment again
  const originalFragment = document.querySelector(
    `[data-fragment="${fragment}"]`
  );
  if (originalFragment) {
    originalFragment.style.display = "block";
  }

  // Remove the slot
  slot.remove();

  // Update preview
  updateSentencePreview();

  // Show placeholder if no fragments
  const dropZone = document.getElementById("sentence-slots");
  const placeholder = document.querySelector(".drop-zone-placeholder");
  if (placeholder && dropZone.children.length === 0) {
    placeholder.style.display = "block";
  }
}

// Update sentence preview
function updateSentencePreview() {
  const slots = document.querySelectorAll(".fragment-slot");
  const preview = document.getElementById("completed-sentence-preview");
  const previewText = document.getElementById("preview-text");

  if (slots.length > 0) {
    const sentence = Array.from(slots)
      .map((slot) => slot.dataset.fragment)
      .join(" ");
    previewText.textContent = sentence;
    preview.style.display = "block";
  } else {
    preview.style.display = "none";
  }
}

// Check if sentence is correct
function checkSentence() {
  const slots = document.querySelectorAll(".fragment-slot");
  const pageData = textData[currentPage];
  const currentSentence = pageData.sentences[currentSentenceIndex];

  if (slots.length === 0) {
    showSentenceFeedback(
      false,
      "Debes arrastrar al menos una parte de la oración."
    );
    return;
  }

  if (slots.length !== currentSentence.fragments.length) {
    showSentenceFeedback(false, "Debes usar todas las partes de la oración.");
    return;
  }

  sentenceAttempts++;
  updateSentenceAttempts();

  // Check if order is correct
  const userOrder = Array.from(slots).map((slot) =>
    parseInt(slot.dataset.originalIndex)
  );
  const correctOrder = currentSentence.fragments.map((_, index) => index);

  const isCorrect = userOrder.every(
    (index, pos) => index === correctOrder[pos]
  );

  if (isCorrect) {
    completedSentences++;
    showSentenceFeedback(
      true,
      "¡Correcto! Has formado la oración correctamente."
    );

    // Update counters
    updateSentenceCounter();
    updateSentenceProgress();

    // Show next sentence button or complete game
    const totalSentences = pageData.sentences.length;
    if (currentSentenceIndex < totalSentences - 1) {
      document.getElementById("next-sentence-btn").style.display =
        "inline-block";
    } else {
      setTimeout(() => completeSentenceGame(), 1500);
    }
  } else {
    showSentenceFeedback(
      false,
      `Incorrecto. ${
        currentSentence.explanation || "Intenta reorganizar las partes."
      }`
    );
  }
}

// Show feedback for sentence attempt
function showSentenceFeedback(isCorrect, message) {
  const resultDiv = document.getElementById("sentence-result");
  const feedbackDiv = document.getElementById("sentence-feedback");

  feedbackDiv.innerHTML = `
    <div class="feedback-message ${isCorrect ? "correct" : "incorrect"}">
      ${isCorrect ? "✅" : "❌"} ${message}
    </div>
  `;

  resultDiv.style.display = "block";

  // Disable check button temporarily if correct
  if (isCorrect) {
    document.getElementById("check-sentence-btn").disabled = true;
    document.getElementById("reset-sentence-btn").disabled = true;
  }
}

// Reset current sentence
function resetCurrentSentence() {
  // Clear drop zone
  const dropZone = document.getElementById("sentence-slots");
  dropZone.innerHTML = "";

  // Show placeholder
  const placeholder = document.querySelector(".drop-zone-placeholder");
  if (placeholder) {
    placeholder.style.display = "block";
  }

  // Show all fragments
  const fragments = document.querySelectorAll(".sentence-fragment");
  fragments.forEach((fragment) => {
    fragment.style.display = "block";
  });

  // Hide preview and result
  document.getElementById("completed-sentence-preview").style.display = "none";
  document.getElementById("sentence-result").style.display = "none";

  // Re-enable buttons
  document.getElementById("check-sentence-btn").disabled = false;
  document.getElementById("reset-sentence-btn").disabled = false;
}

// Move to next sentence
function nextSentence() {
  const pageData = textData[currentPage];

  if (currentSentenceIndex < pageData.sentences.length - 1) {
    currentSentenceIndex++;

    // Regenerate game area
    const gameArea = document.getElementById("sentence-game-area");
    gameArea.innerHTML = generateSentenceGame(pageData);

    // Hide result and next button
    document.getElementById("sentence-result").style.display = "none";
    document.getElementById("next-sentence-btn").style.display = "none";

    // Re-enable buttons
    document.getElementById("check-sentence-btn").disabled = false;
    document.getElementById("reset-sentence-btn").disabled = false;
  }
}

// Complete the sentence game
function completeSentenceGame() {
  sentenceGameCompleted = true;
  const nextButton = document.getElementById("next-button");
  nextButton.disabled = false;

  // Calculate statistics
  const endTime = Date.now();
  const totalTime = Math.round((endTime - sentenceGameStartTime) / 1000);
  const totalSentences = textData[currentPage].sentences.length;

  // Show completion summary
  const summaryDiv = document.getElementById("sentence-game-summary");
  const scoreDisplay = document.getElementById("sentence-score-display");

  scoreDisplay.innerHTML = `
    <div class="completion-message">
      <h4>¡Excelente trabajo! 🎉</h4>
      <p>Has completado todas las oraciones correctamente.</p>
    </div>
  `;

  // Update summary statistics
  document.getElementById(
    "sentence-total-time"
  ).textContent = `${totalTime} segundos`;
  document.getElementById("sentence-total-attempts").textContent =
    sentenceAttempts;
  document.getElementById(
    "sentences-completed"
  ).textContent = `${completedSentences}/${totalSentences}`;

  // Hide other elements and show summary
  document.getElementById("sentence-game-area").style.display = "none";
  document.querySelector(".sentence-controls").style.display = "none";
  document.getElementById("sentence-result").style.display = "none";
  summaryDiv.style.display = "block";
}

// Update sentence counter
function updateSentenceCounter() {
  const counter = document.getElementById("sentence-counter");
  if (counter) {
    const totalSentences = textData[currentPage].sentences.length;
    counter.textContent = `${completedSentences}/${totalSentences}`;
  }
}

// Update sentence attempts counter
function updateSentenceAttempts() {
  const counter = document.getElementById("sentence-attempts");
  if (counter) {
    counter.textContent = sentenceAttempts;
  }
}

// Update progress bar
function updateSentenceProgress() {
  const progressFill = document.getElementById("sentence-progress-fill");
  if (progressFill) {
    const totalSentences = textData[currentPage].sentences.length;
    const percentage = (completedSentences / totalSentences) * 100;
    progressFill.style.width = `${percentage}%`;
  }
}

// Reset sentence game (add this to your resetTrivia function)
function resetSentenceGame() {
  currentSentenceIndex = 0;
  sentenceFragments = [];
  correctOrder = [];
  draggedElement = null;
  sentenceGameCompleted = false;
  sentenceGameStartTime = null;
  sentenceAttempts = 0;
  completedSentences = 0;
}

// Generate cards for the matching game
function generateMatchCards(pairs) {
  // Create array with all cards (each pair becomes 2 cards)
  let cards = [];
  pairs.forEach((pair, pairIndex) => {
    cards.push({
      id: `card-${pairIndex}-0`,
      content: pair.left,
      pairIndex: pairIndex,
      side: "left",
    });
    cards.push({
      id: `card-${pairIndex}-1`,
      content: pair.right,
      pairIndex: pairIndex,
      side: "right",
    });
  });

  // Shuffle cards
  cards = shuffleArray(cards);

  // Generate HTML for cards
  return cards
    .map(
      (card) => `
    <div class="match-card" 
         data-pair-index="${card.pairIndex}" 
         data-side="${card.side}"
         data-card-id="${card.id}"
         onclick="selectCard(this)">
      <div class="card-content">
        ${card.content}
      </div>
    </div>
  `
    )
    .join("");
}

// Shuffle array utility function
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Handle card selection
function selectCard(cardElement) {
  if (matchPairsCompleted) return;
  if (cardElement.classList.contains("matched")) return;
  if (cardElement.classList.contains("selected")) return;
  if (selectedCards.length >= 2) return;

  // Start timer on first card selection
  if (!gameStartTime) {
    gameStartTime = Date.now();
  }

  // Add card to selection
  cardElement.classList.add("selected");
  selectedCards.push(cardElement);

  // Check if we have two cards selected
  if (selectedCards.length === 2) {
    setTimeout(() => checkMatch(), 500); // Small delay for better UX
  }
}

// Check if selected cards match
function checkMatch() {
  const [card1, card2] = selectedCards;
  const pair1 = parseInt(card1.dataset.pairIndex);
  const pair2 = parseInt(card2.dataset.pairIndex);

  attempts++;
  updateAttemptsCounter();

  if (pair1 === pair2) {
    // Cards match!
    card1.classList.add("matched");
    card2.classList.add("matched");
    card1.classList.remove("selected");
    card2.classList.remove("selected");

    matchedPairs.push(pair1);
    updatePairsCounter();
    updateProgress();

    // Check if game is complete
    const totalPairs = textData[currentPage].pairs.length;
    if (matchedPairs.length === totalPairs) {
      setTimeout(() => completeMatchGame(), 1000);
    }
  } else {
    // Cards don't match
    card1.classList.add("wrong-match");
    card2.classList.add("wrong-match");

    setTimeout(() => {
      card1.classList.remove("selected", "wrong-match");
      card2.classList.remove("selected", "wrong-match");
    }, 1000);
  }

  selectedCards = [];
}

// Update attempts counter
function updateAttemptsCounter() {
  const counter = document.getElementById("attempts-counter");
  if (counter) {
    counter.textContent = attempts;
  }
}

// Update pairs counter
function updatePairsCounter() {
  const counter = document.getElementById("pairs-counter");
  if (counter) {
    const totalPairs = textData[currentPage].pairs.length;
    counter.textContent = `${matchedPairs.length}/${totalPairs}`;
  }
}

function updateProgress() {
  const progressFill = document.getElementById("match-progress-fill");
  if (progressFill) {
    const totalPairs = textData[currentPage].pairs.length;
    const percentage = (matchedPairs.length / totalPairs) * 100;
    progressFill.style.width = `${percentage}%`;
  }
}

// Complete the matching game
function completeMatchGame() {
  matchPairsCompleted = true;
  const nextButton = document.getElementById("next-button");
  nextButton.disabled = false;

  // Calculate game statistics
  const endTime = Date.now();
  const totalTime = Math.round((endTime - gameStartTime) / 1000);
  const totalPairs = textData[currentPage].pairs.length;
  const accuracy = Math.round((totalPairs / attempts) * 100);

  // Show completion message
  const resultDiv = document.getElementById("match-result");
  const messageDiv = document.getElementById("game-completion-message");

  messageDiv.innerHTML = `
    <h3>¡Felicidades! 🎉</h3>
    <p>Has completado el juego de parejas correctamente.</p>
  `;

  // Update summary statistics
  document.getElementById("total-time").textContent = `${totalTime} segundos`;
  document.getElementById("total-attempts").textContent = attempts;
  document.getElementById("accuracy").textContent = `${accuracy}%`;

  // Show results
  resultDiv.style.display = "block";
}

// Reset match pairs game (add this to your resetTrivia function or call it separately)
function resetMatchPairs() {
  matchPairsCompleted = false;
  selectedCards = [];
  matchedPairs = [];
  attempts = 0;
  gameStartTime = null;
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
