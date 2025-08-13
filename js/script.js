let currentPage = 1;
let currentAudio = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let pageCompleted = false;
let coins = 3600;
let lostCoins = 50;
let nextBranch = "";
let nextNumberOfPage = 0;

let currentSentenceIndex = 0;
let sentenceFragments = [];
let correctOrder = [];
let draggedElement = null;
let sentenceGameCompleted = false;
let sentenceGameStartTime = null;
let sentenceAttempts = 0;
let completedSentences = 0;

let selectedMultipleAnswers = [];

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

let currentTitlesData = titlesVData;
let currentLayoutData = layoutVData;
let currentIntructionsData = instructionsVData;
let currentFeedbackData = feedbackVData;
let currentHistoryData = historyVData;
let currentTextData = textVData;
let currentImagesData = imagesVData;
let currentJumpsData = jumpsVData;
let currentNextData = nextVData;
let currentBranch = "V";

function renderPage() {
  const pageContent = document.getElementById("page-content");
  const headerElement = document.querySelector("header");
  const advButton = document.getElementById("adv-buttons");
  if (
    (currentPage === 1 && currentLayoutData === layoutVData) ||
    currentLayoutData[currentPage] === "Llayout" ||
    currentLayoutData[currentPage] === "Klayout"
  ) {
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
  console.log("currentPAge: " + currentPage);
  console.log("currentBranch: " + currentBranch);
}

//Siguiente pagina
function nextPage() {
  const keys = Object.keys(currentLayoutData);
  const lastKey = keys[keys.length - 1];
  if (currentPage < lastKey + 1) {
    if (currentLayoutData !== layoutVData) {
      coins = coins - lostCoins;
    }
    // console.log(currentNextData[currentPage].branch);
    nextBranch = currentNextData[currentPage].branch;
    nextNumberOfPage = currentNextData[currentPage].numberOfPage;

    resetTrivia();
    resetAdvButtons();

    if (coins <= 0) {
      jumpBranch("F", 1);
      coins = 1;
      lostCoins = 0;
      return;
    }

    if (nextBranch !== currentBranch) {
      jumpBranch(nextBranch, nextNumberOfPage);
    } else {
      currentPage = nextNumberOfPage;
      masterRender();
    }

    // currentPage++;
    // resetTrivia();
    // resetAdvButtons();
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
    content = BLayOutGenerator(
      titles,
      page,
      text,
      history,
      images,
      instructions
    );
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
    content = GLayOutGenerator(
      titles,
      page,
      text,
      history,
      images,
      instructions
    );
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
  } else if (currentLayout === "X2layout") {
    content = X2LayOutGenerator(titles, page, text, history, images);
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

function ILayOutGenerator(titles, page, text, history, images) {
  document.querySelector(
    ".Ilayout"
  ).style.backgroundImage = `url('images/${images[page]}')`;
  return ` 
  <div id="Ilayout-container">
    <div id="text-container">
      <p>${history[page]}</p>
    </div>
  </div>
  <h1>${titles[page]}</h1>`;
}

// Plantilla J
function JLayOutGenerator(titles, page, text, history, images) {
  // const layoutActual = document.getElementsByClassName("Jlayout");
  // console.log(layoutActual);
  // layoutActual.style.backgroundImage = "url('../images/apple.jpg')";
  document.querySelector(
    ".Jlayout"
  ).style.backgroundImage = `url('images/${images[page]}')`;
  return ` 
  <div id="Jlayout-container">
  </div>
  <h1>${titles[page]}</h1>`;
}

// Plantilla K
function KLayOutGenerator(titles, page, text, history, images, jumps) {
  // const layoutActual = document.getElementsByClassName("Jlayout");
  // console.log(layoutActual);
  // layoutActual.style.backgroundImage = "url('../images/apple.jpg')";
  document.querySelector(
    ".Klayout"
  ).style.backgroundImage = `url('images/${images[page]}')`;
  let newLayout0 = jumps[page][0].newLayout;
  let numberOfPage0 = jumps[page][0].numberOfPage;
  let newLayout1 = jumps[page][1].newLayout;
  let numberOfPage1 = jumps[page][1].numberOfPage;

  return ` 
  <div id="Klayout-container">
    <h1>SELECCIONA EL PERSONAJE</h1>
    <div id="characters-container">
      <div id="cha1-button-container" class="cha-container">
        <button class="cha-button" id="cha1-button" onclick="jumpBranch('${newLayout0}',${numberOfPage0})"></button>
        <div class="container-text-character">
          <p class="character-desc">MONICA</p>
        </div>
      </div>
      <div id="cha2-button-container" class="cha-container">
        <button class="cha-button" id="cha2-button" onclick="jumpBranch('${newLayout1}',${numberOfPage1})"></button>
        <div class="container-text-character">
          <p class="character-desc">MIGUEL</p>
        </div>
      </div>
    </div>
  </div>`;
}

// Plantilla L
function LLayOutGenerator(titles, page, text, history, images, jumps) {
  document.querySelector(
    ".Llayout"
  ).style.backgroundImage = `url('images/${images[page][0]}')`;

  return ` 
  <div id="Llayout-container">
    <div id="coins-container">
      <div id="image-coins-container">
        <img id="image-coins" src="images/banana.jpg"/>
      </div>
      <div id="number-coins-container">
        ${coins}
      </div>
    </div>
    <div id="decision-container">
      <div id="decision-header">
        <div id="title-container">
          DECISIÓN
        </div>
        <div id="image-dec-container">
          <img id="image-dec" src="images/${images[page][1]}"/>
        </div>
      </div>
      <div id="question-container">
        <p>${text[page][0]}</p>
      </div>
      <div id="options-container">
        ${buttonGeneratorOptions(jumps, page, text)}
      </div>
    </div>
  </div>`;
}

function buttonGeneratorOptions(jumps, page, text) {
  let result = "";
  for (let i = 0; i < jumps[page].length; i++) {
    result =
      result +
      `<div id="dec${i}-button-container" class="dec-container">
        <button class="dec-button" id="dec${i}-button" onclick="jumpBranch('${
        jumps[page][i].newLayout
      }',${jumps[page][i].numberOfPage})"> ${text[page][i + 1]}</button>
      </div>`;
  }
  return `${result}`;
}
// Plantilla X
function XLayOutGenerator(titles, page, text, history, images) {
  document.querySelector(
    ".Xlayout"
  ).style.backgroundImage = `url('images/${images[page]}')`;
  return ` 
  <div id="Xlayout-container">
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
        <button class="key-buttons" id="desafio-button">DESAFÍO</button>
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
  </div>
  <h1>${titles[page]}</h1>`;
}

// Plantilla X-2 NO coins
function X2LayOutGenerator(titles, page, text, history, images) {
  document.querySelector(
    ".X2layout"
  ).style.backgroundImage = `url('images/${images[page]}')`;
  return ` 
  <div id="Xlayout-container">
    <div id="key-buttons-container">
      <div id="button-historia-container">
        <button class="key-buttons" id="historia-button"  onclick="toggleSidebarLeft()">HISTORIA</button>
      </div>
      <div id="middle-part">
      </div>
      <div id="button-desafio-container">
        <button class="key-buttons" id="desafio-button">DESAFÍO</button>
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
  </div>
  <h1>${titles[page]}</h1>`;
}

// Plantilla B
function BLayOutGenerator(titles, page, text, history, images, instructions) {
  const nextButton = document.getElementById("next-button");
  const pageTrivia = text[page];
  const totalQuestions = pageTrivia.questions.length;
  const currentQuestion = pageTrivia.questions[currentQuestionIndex];
  nextButton.disabled = true;
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
              <h2>${instructions[page]}</h2>
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

function CLayOutGenerator(titles, page, text, history, instructions, images) {
  const nextButton = document.getElementById("next-button");
  const pageTrivia = text[page];
  const totalQuestions = pageTrivia.questions.length;
  const currentQuestion = pageTrivia.questions[currentQuestionIndex];
  nextButton.disabled = true;
  document.querySelector(
    ".Clayout"
  ).style.backgroundImage = `url('images/${images[page]}')`;
  return `
    <div id="Clayout-container">
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
                }%">
                </div>
              </div>
            </div>
            <div class="trivia-question">
              <h2>${instructions[page]}</h2>
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
        </div>
      </div>
    </div>
    <h1>${titles[page]}</h1>`;
}

// Plantilla D
function DLayOutGenerator(
  titles,
  page,
  text,
  history,
  instructions,
  feedback,
  images
) {
  const nextButton = document.getElementById("next-button");
  const pageData = text[page];
  // console.log(text[page]);
  nextButton.disabled = true;
  document.querySelector(
    ".Dlayout"
  ).style.backgroundImage = `url('images/${images[page]}')`;
  return `
    <div id="Dlayout-container">
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
          <p>${
            instructions[page]
          }.  Haz clic en las cartas para encontrar las parejas correctas. Cada carta tiene su pareja correspondiente.</p>
        </div>
        
        <div id="cards-grid" class="cards-grid">
          ${generateMatchCards(pageData.pairs, feedback[page])}
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
          </div>
        </div>
      </div>      
    </div>
    <h1>${titles[page]}</h1>`;
}

// Plantilla E
function ELayOutGenerator(
  titles,
  page,
  text,
  history,
  instructions,
  feedback,
  images
) {
  const nextButton = document.getElementById("next-button");
  const pageData = text[page];
  nextButton.disabled = true;

  // Initialize game state
  if (pageData && pageData.sentences) {
    initializeSentenceGame(pageData.sentences);
  }
  document.querySelector(
    ".Elayout"
  ).style.backgroundImage = `url('images/${images[page]}')`;
  return `
    <div id="Elayout-container">
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
          <p> ${
            instructions[page]
          }Arrastra los fragmentos para formar la oración correcta.</p>
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
          <h3>¡Juego Completado! 🎉 ${feedback[page]}</h3>
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
          </div>
        </div>
      </div>
      



      
    </div>
    <h1>${titles[page]}</h1>`;
}

// Plantilla F
function FLayOutGenerator(
  titles,
  page,
  text,
  history,
  instructions,
  feedback,
  images
) {
  const nextButton = document.getElementById("next-button");
  const pageData = text[page];
  nextButton.disabled = true;

  // Initialize recipe game state
  if (pageData && pageData.recipe) {
    initializeRecipeGame(pageData.recipe);
  }

  document.querySelector(
    ".Flayout"
  ).style.backgroundImage = `url('images/${images[page]}')`;

  return `
    <div id="Flayout-container">
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
              <p>${feedback[page]}}</p>
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
          </div>
        </div>
      </div>



      
    </div>
    <h1>${titles[page]}</h1>`;
}
// Plantilla G
function GLayOutGenerator(titles, page, text, history, images, instructions) {
  const nextButton = document.getElementById("next-button");
  const pageData = text[page];
  nextButton.disabled = true;

  // Initialize phrase game state
  if (pageData && pageData.phrases) {
    initializePhraseGame(pageData.phrases);
  }

  document.querySelector(
    ".Glayout"
  ).style.backgroundImage = `url('images/${images[page]}')`;

  return `
    <div id="Glayout-container">
      <div id="key-buttons-container">
        <div id="coins-container">
          <div id="image-coins-container">
            <img id="image-coins" src="images/banana.jpg"/>
          </div>
          <div id="number-coins-container">
            ${coins}
          </div>
        </div>  
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
          <p>${instructions[page]}</p>
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
          </div>
        </div>
      </div>  

      
    </div>
    <h1>${titles[page]}</h1>`;
}

// Plantilla H
function HLayOutGenerator(
  titles,
  page,
  text,
  history,
  instructions,
  feedback,
  images
) {
  const nextButton = document.getElementById("next-button");
  const pageData = text[page];
  nextButton.disabled = true;
  // Initialize memory game state
  if (pageData && pageData.memoryImages) {
    initializeMemoryGame(pageData.memoryImages);
  }
  document.querySelector(
    ".Hlayout"
  ).style.backgroundImage = `url('images/${images[page]}')`;
  return `
    <div id="Hlayout-container">
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
            <div class="memory-game-container">
        <div class="game-header">
          <div class="game-stats">
            <div class="stat-item">
              <span class="stat-label">Intentos:</span>
              <span id="memory-attempts">0</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Parejas encontradas:</span>
              <span id="memory-pairs">0/${
                (pageData?.memoryImages?.length || 8) / 2
              }</span>
            </div>
          </div>
          <div class="game-progress">
            <div class="progress-bar">
              <div id="memory-progress-fill" class="progress-fill" style="width: 0%"></div>
            </div>
          </div>
        </div>
        
        <div class="memory-instructions">
          <h3>Instrucciones:</h3>
          <p> ${
            instructions[page]
          }Haz clic en las cartas para voltearlas y encuentra las parejas. Si te equivocas, todas las cartas se volverán a ocultar.</p>
        </div>
        
        <div id="memory-cards-grid" class="memory-cards-grid">
          ${generateMemoryCardsWithImages(pageData?.memoryImages || [])}
        </div>
        
        <div class="memory-controls">
          <button id="restart-memory-btn" class="restart-memory-btn" onclick="restartMemoryGame()">
            Reiniciar Juego
          </button>
        </div>
        
        <div id="memory-result" class="memory-result" style="display: none;">
          <div id="memory-feedback" class="memory-feedback"></div>
        </div>
        
        <div id="memory-game-summary" class="memory-game-summary" style="display: none;">
          <h3>¡Felicidades! 🎉</h3>
          <div id="memory-score-display" class="memory-score-display">
            <div class="completion-message">
              <h4>¡Has encontrado todas las parejas!</h4>
              <p>${feedback[page]}</p>
            </div>
          </div>
          <div class="game-summary">
            <div class="summary-item">
              <strong>Tiempo total:</strong> <span id="memory-total-time">--</span>
            </div>
            <div class="summary-item">
              <strong>Intentos:</strong> <span id="memory-total-attempts">--</span>
            </div>
            <div class="summary-item">
              <strong>Parejas encontradas:</strong> <span id="memory-pairs-found">--</span>
            </div>
          </div>
          <button class="continue-btn" onclick="nextPage()">Continuar</button>
        </div>
      </div>
          </div>
        </div>
      </div>
      
    </div>
    <h1>${titles[page]}</h1>`;
}

function jumpBranch(newLayout, numberOfPage) {
  currentTitlesData = eval("titles" + newLayout + "Data");
  currentLayoutData = eval("layout" + newLayout + "Data");
  currentIntructionsData = eval("instructions" + newLayout + "Data");
  currentFeedbackData = eval("feedback" + newLayout + "Data");
  currentHistoryData = eval("history" + newLayout + "Data");
  currentTextData = eval("text" + newLayout + "Data");
  currentImagesData = eval("images" + newLayout + "Data");
  currentJumpsData = eval("jumps" + newLayout + "Data");
  currentNextData = eval("next" + newLayout + "Data");
  currentBranch = newLayout;
  currentPage = numberOfPage;

  if (newLayout === "H") {
    document.documentElement.style.setProperty("--colorvar1", "#5e7547");
    document.documentElement.style.setProperty("--colorvar2", "#172601");
  }
  if (newLayout === "A" || newLayout === "V") {
    document.documentElement.style.setProperty("--colorvar1", "#d1ebe0");
    document.documentElement.style.setProperty("--colorvar2", "#518084");
  }
  masterRender();
}

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
// Initialize memory game
function initializeMemoryGame(images) {
  memoryGameCompleted = false;
  memoryGameStartTime = null;
  memoryAttempts = 0;
  memoryFlippedCards = [];
  memoryMatchedPairs = 0;
  memoryGameInProgress = false;

  // Create pairs of cards (duplicate each image)
  memoryCards = [];
  for (let i = 0; i < images.length; i++) {
    memoryCards.push({
      id: i * 2,
      image: images[i],
      matched: false,
      flipped: false,
    });
    memoryCards.push({
      id: i * 2 + 1,
      image: images[i],
      matched: false,
      flipped: false,
    });
  }

  // Shuffle the cards
  memoryCards = shuffleArray(memoryCards);
}

function generateMemoryCardsWithImages(images) {
  if (!images || images.length === 0) {
    return generateMemoryCards([]); // fallback to emoji version
  }

  let cardsHTML = "";

  // Create pairs and shuffle
  const cardPairs = [];
  for (let i = 0; i < images.length; i++) {
    cardPairs.push(images[i], images[i]);
  }
  const shuffledCards = shuffleArray(cardPairs);

  shuffledCards.forEach((image, index) => {
    const isImageFile =
      image.includes(".jpg") ||
      image.includes(".png") ||
      image.includes(".gif");

    cardsHTML += `
      <div class="memory-card" data-card-id="${index}" data-image="${image}" onclick="flipMemoryCard(${index})">
        <div class="card-inner">
          <div class="card-front">
            <div class="card-back-design">?</div>
          </div>
          <div class="card-back">
            <div class="card-image">
              ${
                isImageFile
                  ? `<img src="images/${image}" alt="Memory card" style="width: 80%; height: 80%; object-fit: cover; border-radius: 5px;">`
                  : image
              }
            </div>
          </div>
        </div>
      </div>
    `;
  });

  return cardsHTML;
}
// Generate memory cards HTML
function generateMemoryCards(images) {
  if (!images || images.length === 0) {
    // Default images if none provided
    images = ["🍎", "🍌", "🍇", "🍓", "🍊", "🥝", "🍑", "🍍"];
  }

  let cardsHTML = "";

  // Create pairs and shuffle
  const cardPairs = [];
  for (let i = 0; i < images.length; i++) {
    cardPairs.push(images[i], images[i]);
  }
  const shuffledCards = shuffleArray(cardPairs);

  shuffledCards.forEach((image, index) => {
    cardsHTML += `
      <div class="memory-card" data-card-id="${index}" data-image="${image}" onclick="flipMemoryCard(${index})">
        <div class="card-inner">
          <div class="card-front">
            <div class="card-back-design">?</div>
          </div>
          <div class="card-back">
            <div class="card-image">${image}</div>
          </div>
        </div>
      </div>
    `;
  });

  return cardsHTML;
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

// Flip memory card
function flipMemoryCard(cardIndex) {
  if (memoryGameInProgress) return; // Prevent clicks during processing

  const card = document.querySelector(`[data-card-id="${cardIndex}"]`);
  if (
    !card ||
    card.classList.contains("flipped") ||
    card.classList.contains("matched")
  ) {
    return;
  }

  // Start timer on first click
  if (!memoryGameStartTime) {
    memoryGameStartTime = Date.now();
  }

  // Flip the card
  card.classList.add("flipped");
  memoryFlippedCards.push({
    element: card,
    index: cardIndex,
    image: card.dataset.image,
  });

  // Check if we have two flipped cards
  if (memoryFlippedCards.length === 2) {
    memoryGameInProgress = true;
    memoryAttempts++;
    updateMemoryStats();

    setTimeout(() => {
      checkMemoryMatch();
    }, 1000);
  }
}

// Check if flipped cards match
function checkMemoryMatch() {
  const [card1, card2] = memoryFlippedCards;

  if (card1.image === card2.image) {
    // Match found!
    card1.element.classList.add("matched");
    card2.element.classList.add("matched");
    memoryMatchedPairs++;

    // Check if game is complete
    if (
      memoryMatchedPairs ===
      document.querySelectorAll(".memory-card").length / 2
    ) {
      setTimeout(() => {
        completeMemoryGame();
      }, 500);
    }
  } else {
    // No match - flip all cards back
    flipAllCardsBack();
  }

  // Reset flipped cards array
  memoryFlippedCards = [];
  memoryGameInProgress = false;
}

// Flip all cards back (punishment for wrong match)
function flipAllCardsBack() {
  const allCards = document.querySelectorAll(".memory-card");
  allCards.forEach((card) => {
    if (!card.classList.contains("matched")) {
      card.classList.remove("flipped");
    }
  });
}

// Update memory game statistics
function updateMemoryStats() {
  document.getElementById("memory-attempts").textContent = memoryAttempts;
  document.getElementById(
    "memory-pairs"
  ).textContent = `${memoryMatchedPairs}/${
    document.querySelectorAll(".memory-card").length / 2
  }`;

  const totalPairs = document.querySelectorAll(".memory-card").length / 2;
  const progressPercentage = (memoryMatchedPairs / totalPairs) * 100;
  document.getElementById(
    "memory-progress-fill"
  ).style.width = `${progressPercentage}%`;
}

// Complete memory game
function completeMemoryGame() {
  memoryGameCompleted = true;
  const endTime = Date.now();
  const totalTime = Math.round((endTime - memoryGameStartTime) / 1000);

  // Show completion summary
  document.getElementById("memory-game-summary").style.display = "block";
  document.getElementById(
    "memory-total-time"
  ).textContent = `${totalTime} segundos`;
  document.getElementById("memory-total-attempts").textContent = memoryAttempts;
  document.getElementById("memory-pairs-found").textContent =
    memoryMatchedPairs;

  // Enable next button
  const nextButton = document.getElementById("next-button");
  if (nextButton) {
    nextButton.disabled = false;
  }
}

// Restart memory game
function restartMemoryGame() {
  memoryGameCompleted = false;
  memoryGameStartTime = null;
  memoryAttempts = 0;
  memoryFlippedCards = [];
  memoryMatchedPairs = 0;
  memoryGameInProgress = false;

  // Reset all cards
  const allCards = document.querySelectorAll(".memory-card");
  allCards.forEach((card) => {
    card.classList.remove("flipped", "matched");
  });

  // Shuffle cards positions
  const cardsGrid = document.getElementById("memory-cards-grid");
  const cards = Array.from(cardsGrid.children);
  const shuffledCards = shuffleArray(cards);

  // Clear grid and re-add shuffled cards
  cardsGrid.innerHTML = "";
  shuffledCards.forEach((card) => {
    cardsGrid.appendChild(card);
  });

  // Reset stats
  updateMemoryStats();

  // Hide summary
  document.getElementById("memory-game-summary").style.display = "none";
}

// Reset memory game (called in resetTrivia)
function resetMemoryGame() {
  memoryGameCompleted = false;
  memoryGameStartTime = null;
  memoryAttempts = 0;
  memoryFlippedCards = [];
  memoryMatchedPairs = 0;
  memoryGameInProgress = false;
}

// Initialize phrase game
function initializePhraseGame(phrases) {
  if (!phrases || phrases.length === 0) return;

  phraseGameCompleted = false;
  phraseGameStartTime = null;
  phraseAttempts = 0;
  currentPhraseIndex = 0;
  completedPhrases = 0;
  phraseGameData = phrases;
  phraseDraggedElement = null;
}

// Generate the phrase game HTML
function generatePhraseGame(pageData) {
  if (!pageData || !pageData.phrases || pageData.phrases.length === 0) {
    return '<div class="no-phrases">No hay frases disponibles para este juego.</div>';
  }

  const currentPhrase = pageData.phrases[currentPhraseIndex];

  return `
    <div class="current-phrase-container">
      <div class="phrase-number">
        Frase ${currentPhraseIndex + 1} de ${pageData.phrases.length}
      </div>
      
      <div class="phrase-hint">
        <strong>Tema:</strong> ${
          currentPhrase.hint || "Completa la frase con las palabras correctas"
        }
      </div>
      
      <div class="phrase-display">
        <div class="phrase-text" id="phrase-text">
          ${generatePhraseWithBlanks(currentPhrase)}
        </div>
      </div>
      
      <div class="available-words-container">
        <div class="available-words-title">Palabras disponibles:</div>
        <div id="available-words" class="available-words">
          ${generateAvailableWords(currentPhrase.words)}
        </div>
      </div>
      
      <div class="completed-phrase-preview" id="completed-phrase-preview" style="display: none;">
        <div class="preview-title">Frase completada:</div>
        <div id="phrase-preview-text" class="preview-text"></div>
      </div>
    </div>
  `;
}

// Generate phrase with blank spaces (drop zones)
function generatePhraseWithBlanks(phraseData) {
  let phraseHTML = phraseData.template;

  // Replace blanks with drop zones
  phraseData.blanks.forEach((blank, index) => {
    const placeholder = `{${index}}`;
    const dropZone = `
      <span class="word-drop-zone" 
            data-blank-index="${index}"
            data-expected-word="${blank.word}"
            ondrop="dropWord(event)" 
            ondragover="allowWordDrop(event)">
        <span class="drop-placeholder">[${blank.hint || "palabra"}]</span>
      </span>
    `;
    phraseHTML = phraseHTML.replace(placeholder, dropZone);
  });

  return phraseHTML;
}

// Generate available words (shuffled)
function generateAvailableWords(words) {
  if (!words || words.length === 0) return "";

  // Create array with all words including distractors
  const allWords = [...words];

  // Shuffle the words
  const shuffledWords = shuffleArray(allWords);

  return shuffledWords
    .map(
      (word) => `
    <div class="available-word" 
         draggable="true"
         ondragstart="phraseWordDragStart(event)"
         data-word="${word}">
      ${word}
    </div>
  `
    )
    .join("");
}

// Drag and drop functions for phrase game
function phraseWordDragStart(event) {
  if (phraseGameCompleted) return;

  // Start timer on first interaction
  if (!phraseGameStartTime) {
    phraseGameStartTime = Date.now();
  }

  phraseDraggedElement = event.target;
  event.dataTransfer.setData("text/plain", event.target.dataset.word);
}

function allowWordDrop(event) {
  event.preventDefault();
}

function dropWord(event) {
  event.preventDefault();

  if (!phraseDraggedElement || phraseGameCompleted) return;

  const dropZone = event.target.closest(".word-drop-zone");
  if (!dropZone) return;

  const droppedWord = event.dataTransfer.getData("text/plain");
  const blankIndex = dropZone.dataset.blankIndex;

  // Check if drop zone is already filled
  if (dropZone.querySelector(".dropped-word")) {
    // Return the existing word to available words
    const existingWord = dropZone.querySelector(".dropped-word");
    returnWordToAvailable(existingWord.dataset.word);
    existingWord.remove();
  }

  // Create dropped word element
  const droppedWordElement = document.createElement("span");
  droppedWordElement.className = "dropped-word";
  droppedWordElement.innerHTML = `
    ${droppedWord}
    <button class="remove-word-btn" onclick="removeDroppedWord(this)">×</button>
  `;
  droppedWordElement.dataset.word = droppedWord;
  droppedWordElement.dataset.blankIndex = blankIndex;

  // Hide placeholder and add dropped word
  const placeholder = dropZone.querySelector(".drop-placeholder");
  if (placeholder) {
    placeholder.style.display = "none";
  }

  dropZone.appendChild(droppedWordElement);

  // Hide the dragged element
  phraseDraggedElement.style.display = "none";

  // Update preview
  updatePhrasePreview();

  phraseDraggedElement = null;
}

// Remove dropped word
function removeDroppedWord(button) {
  const droppedWord = button.parentElement;
  const dropZone = droppedWord.parentElement;
  const word = droppedWord.dataset.word;

  // Show placeholder again
  const placeholder = dropZone.querySelector(".drop-placeholder");
  if (placeholder) {
    placeholder.style.display = "inline";
  }

  // Return word to available words
  returnWordToAvailable(word);

  // Remove dropped word
  droppedWord.remove();

  // Update preview
  updatePhrasePreview();
}

// Return word to available words
function returnWordToAvailable(word) {
  const availableWords = document.getElementById("available-words");
  const wordElements = availableWords.querySelectorAll(".available-word");

  wordElements.forEach((wordElement) => {
    if (wordElement.dataset.word === word) {
      wordElement.style.display = "inline-block";
    }
  });
}

// Update phrase preview
function updatePhrasePreview() {
  const dropZones = document.querySelectorAll(".word-drop-zone");
  const preview = document.getElementById("completed-phrase-preview");
  const previewText = document.getElementById("phrase-preview-text");

  let hasWords = false;
  let phraseText = phraseGameData[currentPhraseIndex].template;

  dropZones.forEach((zone, index) => {
    const droppedWord = zone.querySelector(".dropped-word");
    const placeholder = `{${index}}`;

    if (droppedWord) {
      phraseText = phraseText.replace(
        placeholder,
        `<strong>${droppedWord.dataset.word}</strong>`
      );
      hasWords = true;
    } else {
      phraseText = phraseText.replace(placeholder, "_____");
    }
  });

  if (hasWords) {
    previewText.innerHTML = phraseText;
    preview.style.display = "block";
  } else {
    preview.style.display = "none";
  }
}

// Check if phrase is correct
function checkPhrase() {
  const dropZones = document.querySelectorAll(".word-drop-zone");
  const currentPhrase = phraseGameData[currentPhraseIndex];

  if (dropZones.length === 0) {
    showPhraseFeedback(false, "No hay espacios para completar en esta frase.");
    return;
  }

  // Check if all blanks are filled
  const filledBlanks = Array.from(dropZones).filter((zone) =>
    zone.querySelector(".dropped-word")
  );

  if (filledBlanks.length !== currentPhrase.blanks.length) {
    showPhraseFeedback(false, "Debes completar todas las palabras faltantes.");
    return;
  }

  phraseAttempts++;
  updatePhraseAttempts();

  // Check if all words are correct
  let allCorrect = true;
  let incorrectBlanks = [];

  dropZones.forEach((zone, index) => {
    const droppedWord = zone.querySelector(".dropped-word");
    const expectedWord = zone.dataset.expectedWord;

    if (droppedWord && droppedWord.dataset.word !== expectedWord) {
      allCorrect = false;
      incorrectBlanks.push(index);
      zone.classList.add("incorrect-drop");
    } else if (droppedWord) {
      zone.classList.add("correct-drop");
    }
  });

  if (allCorrect) {
    completedPhrases++;
    showPhraseFeedback(
      true,
      "¡Perfecto! Has completado la frase correctamente."
    );

    // Update counters
    updatePhraseCounter();
    updatePhraseProgress();

    // Show next phrase button or complete game
    if (currentPhraseIndex < phraseGameData.length - 1) {
      document.getElementById("next-phrase-btn").style.display = "inline-block";
    } else {
      setTimeout(() => completePhraseGame(), 1500);
    }
  } else {
    const explanation =
      currentPhrase.explanation ||
      "Revisa las palabras incorrectas e intenta de nuevo.";
    showPhraseFeedback(
      false,
      `Algunas palabras son incorrectas. ${explanation}`
    );
  }
}

// Show feedback for phrase attempt
function showPhraseFeedback(isCorrect, message) {
  const resultDiv = document.getElementById("phrase-result");
  const feedbackDiv = document.getElementById("phrase-feedback");

  feedbackDiv.innerHTML = `
    <div class="feedback-message ${isCorrect ? "correct" : "incorrect"}">
      ${isCorrect ? "✅" : "❌"} ${message}
    </div>
  `;

  resultDiv.style.display = "block";

  // Disable buttons temporarily if correct
  if (isCorrect) {
    document.getElementById("check-phrase-btn").disabled = true;
    document.getElementById("reset-phrase-btn").disabled = true;
  }
}

// Reset current phrase
function resetCurrentPhrase() {
  // Clear all drop zones
  const dropZones = document.querySelectorAll(".word-drop-zone");
  dropZones.forEach((zone) => {
    const droppedWord = zone.querySelector(".dropped-word");
    if (droppedWord) {
      returnWordToAvailable(droppedWord.dataset.word);
      droppedWord.remove();
    }

    // Show placeholder
    const placeholder = zone.querySelector(".drop-placeholder");
    if (placeholder) {
      placeholder.style.display = "inline";
    }

    // Remove styling
    zone.classList.remove("correct-drop", "incorrect-drop");
  });

  // Hide preview and result
  document.getElementById("completed-phrase-preview").style.display = "none";
  document.getElementById("phrase-result").style.display = "none";

  // Re-enable buttons
  document.getElementById("check-phrase-btn").disabled = false;
  document.getElementById("reset-phrase-btn").disabled = false;
}

// Move to next phrase
function nextPhrase() {
  if (currentPhraseIndex < phraseGameData.length - 1) {
    currentPhraseIndex++;

    // Regenerate game area
    const gameArea = document.getElementById("phrase-game-area");
    gameArea.innerHTML = generatePhraseGame({ phrases: phraseGameData });

    // Hide result and next button
    document.getElementById("phrase-result").style.display = "none";
    document.getElementById("next-phrase-btn").style.display = "none";

    // Re-enable buttons
    document.getElementById("check-phrase-btn").disabled = false;
    document.getElementById("reset-phrase-btn").disabled = false;
  }
}

// Complete the phrase game
function completePhraseGame() {
  phraseGameCompleted = true;
  const nextButton = document.getElementById("next-button");
  nextButton.disabled = false;

  // Calculate statistics
  const endTime = Date.now();
  const totalTime = Math.round((endTime - phraseGameStartTime) / 1000);

  // Show completion summary
  const summaryDiv = document.getElementById("phrase-game-summary");

  // Update summary statistics
  document.getElementById(
    "phrase-total-time"
  ).textContent = `${totalTime} segundos`;
  document.getElementById("phrase-total-attempts").textContent = phraseAttempts;
  document.getElementById(
    "phrases-completed"
  ).textContent = `${completedPhrases}/${phraseGameData.length}`;

  // Hide other elements and show summary
  document.getElementById("phrase-game-area").style.display = "none";
  document.querySelector(".phrase-controls").style.display = "none";
  document.getElementById("phrase-result").style.display = "none";
  summaryDiv.style.display = "block";
}

// Update phrase counter
function updatePhraseCounter() {
  const counter = document.getElementById("phrase-counter");
  if (counter) {
    counter.textContent = `${completedPhrases}/${phraseGameData.length}`;
  }
}

// Update phrase attempts counter
function updatePhraseAttempts() {
  const counter = document.getElementById("phrase-attempts");
  if (counter) {
    counter.textContent = phraseAttempts;
  }
}

// Update progress bar
function updatePhraseProgress() {
  const progressFill = document.getElementById("phrase-progress-fill");
  if (progressFill) {
    const percentage = (completedPhrases / phraseGameData.length) * 100;
    progressFill.style.width = `${percentage}%`;
  }
}

// Reset phrase game state
function resetPhraseGame() {
  phraseGameCompleted = false;
  phraseGameStartTime = null;
  phraseAttempts = 0;
  currentPhraseIndex = 0;
  completedPhrases = 0;
  phraseGameData = null;
  phraseDraggedElement = null;
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
    originalIndex: index,
  }));

  // Shuffle the array
  for (let i = shuffledSteps.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledSteps[i], shuffledSteps[j]] = [shuffledSteps[j], shuffledSteps[i]];
  }

  return shuffledSteps
    .map(
      (step) => `
    <div class="recipe-step-card" 
         draggable="true"
         ondragstart="recipeStepDragStart(event)"
         data-step-content="${step.content}"
         data-original-index="${step.originalIndex}">
      <div class="step-number">Paso</div>
      <div class="step-content">${step.content}</div>
    </div>
  `
    )
    .join("");
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
  event.dataTransfer.setData(
    "originalIndex",
    event.target.dataset.originalIndex
  );
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
  if (placeholder && orderedSteps.children.length > 1) {
    // >1 because placeholder is also a child
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
  const originalStep = document.querySelector(
    `[data-step-content="${stepContent}"]`
  );
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
  if (placeholder && orderedSteps.children.length === 1) {
    // Only placeholder left
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
  const pageData = currentTextData[currentPage];
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
  const userOrder = Array.from(orderedSteps).map((step) =>
    parseInt(step.dataset.originalIndex)
  );

  const isCorrect = userOrder.every((index, pos) => index === pos);

  if (isCorrect) {
    showRecipeFeedback(
      true,
      "¡Excelente! Has ordenado todos los pasos correctamente."
    );
    setTimeout(() => completeRecipeGame(), 1500);
  } else {
    showRecipeFeedback(
      false,
      "El orden no es correcto. Revisa la secuencia lógica de los pasos."
    );
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
  document.getElementById(
    "recipe-total-time"
  ).textContent = `${totalTime} segundos`;
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
  orderedSteps.innerHTML =
    '<div class="drop-zone-placeholder">Arrastra los pasos aquí en el orden correcto</div>';

  // Show all available steps
  const availableSteps = document.querySelectorAll(".recipe-step-card");
  availableSteps.forEach((step) => {
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
  const pageData = currentTextData[currentPage];
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
  const pageData = currentTextData[currentPage];

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
  const totalSentences = currentTextData[currentPage].sentences.length;

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
    const totalSentences = currentTextData[currentPage].sentences.length;
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
    const totalSentences = currentTextData[currentPage].sentences.length;
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
function generateMatchCards(pairs, feedbackMessage) {
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
         onclick="selectCard(this,'${feedbackMessage}')">
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
function selectCard(cardElement, feedbackMessage) {
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
    setTimeout(() => checkMatch(feedbackMessage), 500); // Small delay for better UX
  }
}

// Check if selected cards match
function checkMatch(feedbackMessage) {
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
    const totalPairs = currentTextData[currentPage].pairs.length;
    if (matchedPairs.length === totalPairs) {
      setTimeout(() => completeMatchGame(feedbackMessage), 1000);
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
  console.log(currentPage);
  if (counter) {
    const totalPairs = currentTextData[currentPage].pairs.length;
    counter.textContent = `${matchedPairs.length}/${totalPairs}`;
  }
}

function updateProgress() {
  const progressFill = document.getElementById("match-progress-fill");
  if (progressFill) {
    const totalPairs = currentTextData[currentPage].pairs.length;
    const percentage = (matchedPairs.length / totalPairs) * 100;
    progressFill.style.width = `${percentage}%`;
  }
}

// Complete the matching game
function completeMatchGame(feedbackMessage) {
  matchPairsCompleted = true;
  const nextButton = document.getElementById("next-button");
  nextButton.disabled = false;

  // Calculate game statistics
  const endTime = Date.now();
  const totalTime = Math.round((endTime - gameStartTime) / 1000);
  const totalPairs = currentTextData[currentPage].pairs.length;
  const accuracy = Math.round((totalPairs / attempts) * 100);

  // Show completion message
  const resultDiv = document.getElementById("match-result");
  const messageDiv = document.getElementById("game-completion-message");

  messageDiv.innerHTML = `
    <h3>¡Felicidades! 🎉</h3>
    <p>${feedbackMessage} Has completado el juego de parejas correctamente. </p>
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
  const pageTrivia = currentTextData[currentPage];
  const currentQuestion = pageTrivia.questions[currentQuestionIndex];

  // Check if this is a multi-select question
  const isMultiSelect = Array.isArray(
    currentQuestion.correctAnswers || currentQuestion.correctAnswer
  );

  if (isMultiSelect) {
    // Handle multi-select logic
    const optionIndex = selectedMultipleAnswers.indexOf(selectedOption);

    if (optionIndex > -1) {
      // Deselect if already selected
      selectedMultipleAnswers.splice(optionIndex, 1);
      document
        .querySelector(`[data-option="${selectedOption}"]`)
        .classList.remove("selected");
    } else {
      // Select if not already selected
      selectedMultipleAnswers.push(selectedOption);
      document
        .querySelector(`[data-option="${selectedOption}"]`)
        .classList.add("selected");
    }

    // Show submit button for multi-select questions
    showSubmitButton();
  } else {
    // Handle single-select logic (existing behavior)
    const correctAnswer =
      currentQuestion.correctAnswer || currentQuestion.correctAnswers[0];
    const isCorrect = selectedOption === correctAnswer;

    // Store the answer
    userAnswers[currentQuestionIndex] = {
      userAnswer: selectedOption,
      correct: isCorrect,
      question: currentQuestion.question,
      explanation: currentQuestion.explanation,
      selectedOption: currentQuestion.options[selectedOption],
      correctOption: currentQuestion.options[correctAnswer],
    };

    // Show result for current question
    showMultipleChoiceResult(selectedOption, currentQuestion);

    // Disable buttons
    const buttons = document.querySelectorAll(".trivia-btn");
    buttons.forEach((btn) => (btn.disabled = true));
  }
}

// 4. New function to handle multi-select submission
function submitMultipleAnswers() {
  const pageTrivia = currentTextData[currentPage];
  const currentQuestion = pageTrivia.questions[currentQuestionIndex];
  const correctAnswers = currentQuestion.correctAnswers || [
    currentQuestion.correctAnswer,
  ];

  // Check if selected answers match correct answers
  const isCorrect =
    selectedMultipleAnswers.length === correctAnswers.length &&
    selectedMultipleAnswers.every((answer) =>
      correctAnswers.includes(answer)
    ) &&
    correctAnswers.every((answer) => selectedMultipleAnswers.includes(answer));

  // Store the answer
  userAnswers[currentQuestionIndex] = {
    userAnswer: selectedMultipleAnswers.slice(), // Copy array
    correct: isCorrect,
    question: currentQuestion.question,
    explanation: currentQuestion.explanation,
    selectedOptions: selectedMultipleAnswers.map(
      (index) => currentQuestion.options[index]
    ),
    correctOptions: correctAnswers.map(
      (index) => currentQuestion.options[index]
    ),
  };

  // Show result for current question
  showMultiSelectResult(selectedMultipleAnswers, currentQuestion);

  // Disable buttons
  const buttons = document.querySelectorAll(".trivia-btn");
  buttons.forEach((btn) => (btn.disabled = true));

  // Hide submit button
  document.getElementById("submit-answers-btn").style.display = "none";
}

// 5. New function to show submit button
function showSubmitButton() {
  let submitBtn = document.getElementById("submit-answers-btn");
  if (!submitBtn) {
    const buttonContainer = document.querySelector(
      ".trivia-buttons.multiple-choice"
    );
    submitBtn = document.createElement("button");
    submitBtn.id = "submit-answers-btn";
    submitBtn.className = "trivia-btn submit-btn";
    submitBtn.textContent = "Enviar Respuestas";
    submitBtn.onclick = submitMultipleAnswers;
    buttonContainer.appendChild(submitBtn);
  }

  // Show/hide based on whether any answers are selected
  submitBtn.style.display =
    selectedMultipleAnswers.length > 0 ? "block" : "none";
}

// 6. New function to show multi-select results
function showMultiSelectResult(selectedOptions, questionData) {
  const resultDiv = document.getElementById("question-result");
  const messageDiv = document.getElementById("result-message");
  const explanationDiv = document.getElementById("explanation");
  const nextBtn = document.getElementById("next-question-btn");

  const correctAnswers = questionData.correctAnswers || [
    questionData.correctAnswer,
  ];
  const isCorrect =
    selectedOptions.length === correctAnswers.length &&
    selectedOptions.every((answer) => correctAnswers.includes(answer)) &&
    correctAnswers.every((answer) => selectedOptions.includes(answer));

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
    if (correctAnswers.includes(index)) {
      btn.classList.add("correct-answer");
    } else if (
      selectedOptions.includes(index) &&
      !correctAnswers.includes(index)
    ) {
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

  // Handle both single and multiple correct answers
  const correctAnswers = Array.isArray(questionData.correctAnswers)
    ? questionData.correctAnswers
    : [questionData.correctAnswer];

  const isCorrect = correctAnswers.includes(selectedOption);

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
    if (correctAnswers.includes(index)) {
      btn.classList.add("correct-answer");
    } else if (index === selectedOption && !correctAnswers.includes(index)) {
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

  // Reset multi-select state
  selectedMultipleAnswers = [];

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

  const isMultiSelect = Array.isArray(
    currentQuestion.correctAnswers || currentQuestion.correctAnswer
  );

  const instructionElement = document.querySelector(".trivia-question h2");
  if (instructionElement) {
    instructionElement.textContent = isMultiSelect
      ? "Selecciona todas las respuestas correctas:"
      : "Selecciona la respuesta correcta:";
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

  if (correctAnswers < totalQuestions) {
    coins = coins - lostCoins;
    console.log("hay un issue");
  }

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
  selectedMultipleAnswers = [];
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
