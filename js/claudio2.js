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

// Memory game variables
let memoryGameCompleted = false;
let memoryGameStartTime = null;
let memoryAttempts = 0;
let memoryFlippedCards = [];
let memoryMatchedPairs = 0;
let memoryCards = [];
let memoryGameInProgress = false;

function renderPage() {
  const pageContent = document.getElementById("page-content");
  const headerElement = document.querySelector("header");
  // const footerElement = document.querySelector("footer");
  const advButton = document.getElementById("adv-buttons");
  // const inventory = document.getElementById("inventory-container");
  if (currentPage === 0) {
    headerElement.style.display = "none";
    advButton.style.display = "none";
    // footerElement.style.display = "none";
    // inventory.style.visibility = "hidden";
  } else {
    advButton.style.display = "block";
    headerElement.style.display = "block";
    // footerElement.style.display = "block";
    // inventory.style.visibility = "visible";
  }
  pageContent.className = layoutData[currentPage];
  pageContent.innerHTML = createStructure(
    titlesData,
    layoutData,
    currentPage,
    textData,
    historyData
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
function createStructure(titles, layout, page, text, history) {
  let currentLayout = layout[page];
  let content = "";
  if (currentLayout === "Alayout") {
    content = ALayOutGenerator(titles, page);
  } else if (currentLayout === "Blayout") {
    content = BLayOutGenerator(titles, page, text, history);
  } else if (currentLayout === "Clayout") {
    content = CLayOutGenerator(titles, page, text, history);
  } else if (currentLayout === "Dlayout") {
    content = DLayOutGenerator(titles, page, text, history);
  } else if (currentLayout === "Elayout") {
    content = ELayOutGenerator(titles, page, text, history);
  } else if (currentLayout === "Flayout") {
    content = FLayOutGenerator(titles, page, text, history);
  } else if (currentLayout === "Glayout") {
    content = GLayOutGenerator(titles, page, text, history);
  } else if (currentLayout === "Hlayout") {
    content = HLayOutGenerator(titles, page, text, history);
  } else if (currentLayout === "Xlayout") {
    content = XLayOutGenerator(titles, page, text, history);
  }

  return content;
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
