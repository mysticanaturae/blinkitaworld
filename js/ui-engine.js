
/* =========================
   UI ENGINE — STABLE CORE RESTORE
========================= */

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
  if (widget) widget.style.display = "none";

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
      setTimeout(step, 2200);
    } else {
      finishIntro();
    }
  };

  const finishIntro = () => {
    intro.classList.add("hidden");

    setTimeout(() => {
      intro.style.display = "none";
      showWidget();
    }, 900);
  };

  setTimeout(step, 800);
}

/* =========================
   WIDGET SHOW
========================= */

function showWidget() {
  const widget = document.getElementById("ziv-cas-header");
  if (widget) widget.style.display = "flex";

  if (typeof window.renderZivCas === "function") {
    window.renderZivCas();
  }
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
   ORACLE STATE (SAFE)
========================= */

function toggleOracleCard() {
  const card = document.getElementById("time-portal");
  if (!card) return;

  card.classList.toggle("oracle-open");
}

window.toggleOracleCard = toggleOracleCard;