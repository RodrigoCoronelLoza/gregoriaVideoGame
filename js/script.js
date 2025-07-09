let currentPage = 0;
let currentAudio = null;
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
  pageContent.innerHTML = createStructure(titlesData, layoutData, currentPage);
  // playAudio(audioData, currentPage);
  console.log(currentPage);
}

//Siguiente pagina
function nextPage() {
  if (currentPage < Object.keys(titlesData).length - 1) {
    currentPage++;
    masterRender();
  }
}

//Pagina anterior
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    masterRender();
  }
}

//Pagina arbitraria
function setPage(value) {
  currentPage = value;
  masterRender();
}

//Crear el DOM dinamico
function createStructure(titles, layout, page) {
  let currentLayout = layout[page];
  let content = "";
  if (currentLayout === "Alayout") {
    content = ALayOutGenerator(titles, page);
  } else if (currentLayout === "Blayout") {
    content = BLayOutGenerator(titles, page);
  }
  return content;
}
// Plantilla B
function ALayOutGenerator(titles, page) {
  return ` 
  <div id="Alayout-container">
    <h1 class="titles" id="Atitle">${titles[page]}</h1>
    <div class="button-caratula-container">
      <button class="nav-buttons" id="comenzar-button" onclick="nextPage()">Comienza</button>
    </div>
  </div>`;
}
function BLayOutGenerator(titles, page) {
  return ` 
  <div id="Alayout-container">
    <h1 class="titles" id="Btitle">${titles[page]}</h1>
  </div>`;
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
