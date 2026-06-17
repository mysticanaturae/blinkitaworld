
let introRunning = false;

/* =========================
   INTRO SYSTEM
========================= */

function runIntro() {
  if (introRunning) return;
  introRunning = true;

  const intro =
    document.querySelector(".blinkita-intro") ||
    document.getElementById("time-portal");

  const phaseEl = document.getElementById("portal-phase");
  const textEl = document.getElementById("portal-text");

  const widget = document.getElementById("ziv-cas-header");

  if (widget) widget.style.display = "none"; // 🔥 HARD HIDE widget

  if (!intro || !phaseEl || !textEl) return;

  const phases = [
    { name: "SPOMIN", text: "Spominjaš se, kar si že vedela." },
    { name: "ODPIRANJE", text: "Vrata se odpirajo znotraj." },
    { name: "VSTOP", text: "Prestopaš v prostor časa." }
  ];

  let i = 0;

  const step = () => {
    if (i < phases.length) {
      phaseEl.textContent = phases[i].name;
      textEl.textContent = phases[i].text;
      i++;
      setTimeout(step, 2000);
    } else {
      finishIntro();
    }
  };

  const finishIntro = () => {

    intro.classList.add("hidden");

    setTimeout(() => {
      intro.style.display = "none";

      showWidget();     // 🔥 šele tukaj
      renderOnce();     // 🔥 kontroliran render
    }, 900);
  };

  setTimeout(step, 800);
}

/* =========================
   SAFE SINGLE RENDER
========================= */

function renderOnce() {
  if (window.__tzolkinRendered) return;
  window.__tzolkinRendered = true;

  if (typeof window.renderZivCas === "function") {
    window.renderZivCas();
  }
}

/* =========================
   WIDGET SHOW
========================= */

function showWidget() {
  const widget = document.getElementById("ziv-cas-header");
  if (widget) widget.style.display = "flex";
}

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const widget = document.getElementById("ziv-cas-header");
  if (widget) widget.style.display = "none";

  runIntro();

});

/* =========================
   ORACLE STATE
========================= */

let oracleOpen = false;

function toggleOracleCard() {

  const card = document.getElementById("time-portal");
  if (!card) return;

  oracleOpen = !oracleOpen;

  if (oracleOpen) {
    card.classList.add("oracle-open");
  } else {
    card.classList.remove("oracle-open");
  }
}

window.toggleOracleCard = toggleOracleCard;