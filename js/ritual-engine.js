/* =========================
   BLINKITA RITUAL ENGINE v1
========================= */

window.Ritual = {
  state: null,

  init(puzzle) {
    const saved = loadBlinkitaProgress(puzzle.date);

    this.state = saved || createRitualState(puzzle);

    return this.state;
  },

  isFound(word) {
    return this.state.found.includes(word);
  },

  markFound(word) {
    if (!this.isFound(word)) {
      this.state.found.push(word);
      this.state.streak++;

      saveBlinkitaProgress(this.state.date, this.state);
    }
  },

  progress() {
    return this.state.found.length / this.state.words.length;
  }
};