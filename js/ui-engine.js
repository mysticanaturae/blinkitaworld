
/* =========================
   UI ENGINE — STABLE CORE FIXED
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

  if (!intro || !phaseEl || !textEl) return;

  const phases = [
    { name: "SPOMIN", text: "Spominjaš se, kar si že vedela." },
    { name: "ODPIRANJE", text: "Vrata se ne odpirajo zunaj, ampak znotraj." },
    { name: "VSTOP", text: "Prestopaš v prostor, ki je vedno obstajal." }
  ];

  let i = 0;

  const step = () => {
    if (!introRunning) return;

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
    }, 900);

    showWidget();
  };

  setTimeout(step, 800);
}

/* =========================
   WIDGET SHOW
========================= */

function showWidget() {
  const widget = document.getElementById("ziv-cas-header");
  if (widget) widget.style.display = "flex";

  // render AFTER intro
  setTimeout(() => {
    if (typeof window.renderZivCas === "function") {
      window.renderZivCas();
    }
  }, 50);
}

function skipIntro() {
  const intro = document.getElementById("time-portal");
  if (intro) intro.classList.add("hidden");

  showWidget();
}

/* =========================
   INIT (IMPORTANT FIX)
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const widget = document.getElementById("ziv-cas-header");
  if (widget) widget.style.display = "none";

  runIntro();

  // fallback render (če intro skipa ali faila)
  setTimeout(() => {
    showWidget();
  }, 2500);
});

/* expose */
window.runIntro = runIntro;
window.skipIntro = skipIntro;