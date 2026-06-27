/* =========================
   BLINKITA WORDSEARCH ENGINE v1
========================= */

const GRID_SIZE = 10;

function createEmptyGrid(size) {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => "")
  );
}

/* =========================
   PLACE WORD IN GRID
========================= */

function placeWord(grid, word) {
  const directions = [
    [0, 1],   // desno
    [1, 0],   // dol
    [1, 1]    // diagonalno
  ];

  const letters = word.toUpperCase().replace(/\s/g, "").split("");

  for (let attempt = 0; attempt < 50; attempt++) {
    const dir = directions[Math.floor(Math.random() * directions.length)];

    const row = Math.floor(Math.random() * GRID_SIZE);
    const col = Math.floor(Math.random() * GRID_SIZE);

    let fits = true;

    for (let i = 0; i < letters.length; i++) {
      const r = row + dir[0] * i;
      const c = col + dir[1] * i;

      if (r >= GRID_SIZE || c >= GRID_SIZE) {
        fits = false;
        break;
      }

      const cell = grid[r][c];
      if (cell && cell !== letters[i]) {
        fits = false;
        break;
      }
    }

    if (!fits) continue;

    for (let i = 0; i < letters.length; i++) {
      const r = row + dir[0] * i;
      const c = col + dir[1] * i;
      grid[r][c] = letters[i];
    }

    return true;
  }

  return false;
}

/* =========================
   FILL RANDOM LETTERS
========================= */

function fillGrid(grid) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (!grid[r][c]) {
        grid[r][c] =
          alphabet[Math.floor(Math.random() * alphabet.length)];
      }
    }
  }
}

/* =========================
   GENERATE PUZZLE
========================= */

window.generateDailyPuzzle = function () {

  const data = window.getZivCasData?.();
  const words = window.generateWordList?.(data) || [];

  const grid = createEmptyGrid(GRID_SIZE);

  const placedWords = [];

  words.forEach(word => {
    const ok = placeWord(grid, word);
    if (ok) placedWords.push(word);
  });

  fillGrid(grid);

  return {
    date: data?.date,
    kin: data?.kin,
    words: placedWords,
    grid
  };
};

function renderGridInteractive(grid, onLetterClick) {
  const gridEl = document.getElementById("grid");
  gridEl.innerHTML = "";

  grid.forEach((row, r) => {
    const rowEl = document.createElement("div");

    row.forEach((cell, c) => {
      const el = document.createElement("span");

      el.textContent = cell;
      el.className = "cell";

      el.addEventListener("click", () => {
        onLetterClick(cell, r, c, el);
      });

      rowEl.appendChild(el);
    });

    gridEl.appendChild(rowEl);
  });
}

function bindGame() {

  renderGridInteractive(puzzle.grid, (letter) => {

    // zelo preprosta “ritual logika”
    // (kasneje nadgradiva v real word detection)

    const match = state.words.find(w =>
      w.toUpperCase().includes(letter)
    );

    if (match) {
      Ritual.markFound(match);

      renderAll();

      flashFeedback("✨ aktivirano: " + match);
    }
  });

  document.getElementById("finish")
    .addEventListener("click", finishRitual);
}

function flashFeedback(text) {
  const el = document.createElement("div");

  el.className = "feedback";
  el.textContent = text;

  document.body.appendChild(el);

  setTimeout(() => el.classList.add("show"), 10);

  setTimeout(() => {
    el.remove();
  }, 1500);
}

function finishRitual() {

  const percent = Math.round(Ritual.progress() * 100);

  document.getElementById("app").innerHTML = `
    <div class="finish">
      🦋 RITUAL ZAKLJUČEN

      <div class="big">
        ${percent}%
      </div>

      <div>
        Dan ${state.kin}
      </div>

      <button onclick="shareBlinkitaDay(state)">
        DELI ENERGIJO
      </button>
    </div>
  `;
}