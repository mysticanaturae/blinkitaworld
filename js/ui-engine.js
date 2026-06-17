/* =========================
   UI ENGINE — STABLE CORE FIXED
========================= */

let introRunning = false;

/* =========================
   SAFE HELPERS
========================= */

function el(id) {
  return document.getElementById(id);
}

function safeText(id, value) {
  const node = el(id);
  if (!node) return;
  node.textContent = value;
}

/* =========================
   INTRO SYSTEM
========================= */

function runIntro() {
  if (introRunning) return;
  introRunning = true;

  const intro =
    document.querySelector(".blinkita-intro") ||
    el("time-portal");

  const phaseEl = el("portal-phase");
  const textEl = el("portal-text");

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
   WIDGET SHOW (SAFE)
========================= */

function showWidget() {
  const widget = el("ziv-cas-header");
  if (widget) widget.style.display = "flex";

  setTimeout(() => {
    if (typeof window.renderZivCas === "function") {
      window.renderZivCas();
    }
  }, 50);
}

function skipIntro() {
  const intro = el("time-portal");
  if (intro) intro.classList.add("hidden");

  showWidget();
}

/* =========================
   INIT SAFE BOOT
========================= */

window.addEventListener("load", () => {
  const widget = el("ziv-cas-header");
  if (widget) widget.style.display = "none";

  runIntro();

  setTimeout(() => {
    showWidget();
  }, 2500);
});

/* expose */
window.runIntro = runIntro;
window.skipIntro = skipIntro;