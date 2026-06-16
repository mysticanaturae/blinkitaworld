/* =========================
   MAIN BOOTSTRAP — CLEAN STABLE CORE
   Blinkita World v2
   ========================= */

/* =========================
   START
========================= */

window.addEventListener("load", () => {
  bootSystem();
});

/* =========================
   SYSTEM BOOT
========================= */

function bootSystem() {
  hideLoader();

  // UI CORE (safe execution order)
  safeCall("runIntro");
  safeCall("initScrollReveal");
  safeCall("initParallax");
  safeCall("initPageTransitions");

  // TIME SYSTEM
  initTimeSystem();

  // 🔥 TZOLKIN RENDER (MAIN FIX)
  if (typeof renderZivCas === "function" && typeof tzolkinData !== "undefined") {
    renderZivCas(tzolkinData);
  }
}

/* =========================
   LOADER
========================= */

function hideLoader() {
  const loader = document.getElementById("portal-loader");
  if (!loader) return;

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.6s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }, 400);
}

/* =========================
   SAFE CALL
========================= */

function safeCall(fnName) {
  try {
    if (typeof window[fnName] === "function") {
      window[fnName]();
    }
  } catch (err) {
    console.warn(`[Blinkita Engine] ${fnName} failed`, err);
  }
}

/* =========================
   TIME SYSTEM (optional live refresh hook)
========================= */

function initTimeSystem() {

  // če obstaja refresh funkcija v prihodnosti
  safeCall("updateZivCas");

  // prihodnji refresh hook (varno)
  setInterval(() => {
    try {
      if (typeof renderZivCas === "function" && typeof tzolkinData !== "undefined") {
        renderZivCas(tzolkinData);
      }
    } catch (e) {
      console.warn("[Blinkita Engine] time refresh failed", e);
    }
  }, 60000);
}

/* =========================
   DOM READY (backup safety)
========================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof renderZivCas === "function" && typeof tzolkinData !== "undefined") {
    renderZivCas(tzolkinData);
  }
});