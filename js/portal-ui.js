window.UI = {

  renderIntro(data) {
    return `
      <div class="ritual-intro">
        <h1>🦋 BLINKITA TIME</h1>

        <div class="energy">
          ${data.energy}
        </div>

        <div class="kin">
          DAN ${data.kin}
        </div>

        <button id="startRitual">
          VSTOPI
        </button>
      </div>
    `;
  },

  renderWordList(state) {
    return state.words.map(w => {
      const done = state.found.includes(w);

      return `
        <div class="word ${done ? "done" : ""}">
          ${done ? "✓" : "○"} ${w}
        </div>
      `;
    }).join("");
  },

  renderProgress(state) {
    const p = Math.round(Ritual.progress() * 100);

    return `
      <div class="progress">
        ⚡ ${p}% aktivirano
      </div>
    `;
  }
};