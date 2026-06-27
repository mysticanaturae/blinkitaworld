/* =========================
   BLINKITA PORTAL ENGINE v1
========================= */

window.openBlinkitaTime = function () {
  window.location.href = "portal/index.html";
};

/* =========================
   DAILY DATA BRIDGE
========================= */

function getTodayData() {
  if (typeof window.getZivCasData === "function") {
    return window.getZivCasData();
  }
  return null;
}

/* =========================
   WORD LIST GENERATOR
========================= */

function generateWordList(data) {
  if (!data) return [];

  const baseWords = [
    data.signName,
    data.toneKey,
    data.signKey,
    data.energy
  ];

  // fallback + vibe words (kasneje lahko razširiva)
  const extras = [
    "VIZIJA",
    "SVETLOBA",
    "ZAVEDANJE",
    "GIBANJE",
    "FOKUS",
    "DIHANJE",
    "PROSTOR",
    "ČAS"
  ];

  return [...baseWords, ...extras].filter(Boolean);
}

window.createRitualState = function (puzzle) {
  return {
    date: puzzle.date,
    kin: puzzle.kin,
    words: puzzle.words,
    found: [],
    streak: 0,
    startedAt: Date.now()
  };
};

const puzzle = generateDailyPuzzle();
const state = Ritual.init(puzzle);

/* INTRO */
const app = document.getElementById("app");

app.innerHTML = UI.renderIntro(puzzle);

/* START BUTTON */
document.addEventListener("click", (e) => {
  if (e.target.id !== "startRitual") return;

  startGame();
});

function startGame() {

  app.innerHTML = `
    <div id="progress"></div>
    <div id="wordlist"></div>
    <div id="grid"></div>
    <button id="finish">ZAKLJUČI</button>
  `;

  renderAll();
  bindGame();
}

function renderAll() {
  document.getElementById("progress").innerHTML =
    UI.renderProgress(state);

  document.getElementById("wordlist").innerHTML =
    UI.renderWordList(state);
}