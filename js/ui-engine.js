/* =========================
   UI ENGINE — CLEAN CORE (FINAL)
========================= */

/* =========================
   STATE GUARDS
========================= */

let introRunning = false;

/* prevent double init */
window.__introStarted = false;

/* =========================
   INTRO SYSTEM
========================= */

function runIntro() {

  // HARD LOCK (prevents double execution)
  if (window.__introStarted) return;
  window.__introStarted = true;

  if (introRunning) return;
  introRunning = true;

  const phaseEl = document.getElementById("portal-phase");
  const textEl = document.getElementById("portal-text");
  const introFlow = document.getElementById("intro-flow");

  if (!phaseEl || !textEl || !introFlow) return;

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
    introFlow.classList.add("hidden");

    setTimeout(() => {
      introFlow.style.display = "none";
    }, 900);

    showWidget();
  };

  setTimeout(step, 900);
}

/* =========================
   SKIP INTRO
========================= */

function skipIntro() {
  const introFlow = document.getElementById("intro-flow");

  if (introFlow) {
    introFlow.classList.add("hidden");

    setTimeout(() => {
      introFlow.style.display = "none";
    }, 600);
  }

  showWidget();
}

/* =========================
   WIDGET CONTROL
========================= */

function showWidget() {
  const widget = document.getElementById("ziv-cas-header");

  if (widget) {
    widget.style.display = "flex";
  }

  setTimeout(() => {
    if (typeof window.renderZivCas === "function") {
      window.renderZivCas();
    }
  }, 50);
}

/* =========================
   INIT FUNCTION (CALLED BY MAIN)
========================= */

function initUI() {

  const widget = document.getElementById("ziv-cas-header");

  if (widget) {
    widget.style.display = "none";
  }

  runIntro();

  // SAFETY FALLBACK (if anything breaks)
  setTimeout(() => {
    showWidget();
  }, 9000);
}

/* =========================
   EXPOSE GLOBALS
========================= */

window.runIntro = runIntro;
window.skipIntro = skipIntro;
window.initUI = initUI;

console.log("[UI] Blinkita UI engine loaded");