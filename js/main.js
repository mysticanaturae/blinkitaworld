
/* =========================
   MAIN BOOTSTRAP — STABLE CORE
========================= */

window.addEventListener("load", () => {
  bootSystem();
});

/* =========================
   BOOT SYSTEM
========================= */

function bootSystem() {
  hideLoader();
  safeCall("runIntro");

  initTimeSystem();
  initScrollObserver();
}

/* =========================
   LOADER
========================= */

function hideLoader() {
  const loader = document.getElementById("portal-loader");
  if (!loader) return;

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 600);

  }, 300);
}

/* =========================
   SAFE CALL
========================= */

function safeCall(fnName) {
  try {
    if (typeof window[fnName] === "function") {
      window[fnName]();
    }
  } catch (e) {
    console.warn("SafeCall error:", fnName, e);
  }
}

/* =========================
   TIME SYSTEM (TZOLKIN REFRESH LOOP)
========================= */

function initTimeSystem() {
  setInterval(() => {
    if (
      typeof renderZivCas === "function" &&
      typeof tzolkinData !== "undefined"
    ) {
      renderZivCas(tzolkinData);
    }
  }, 60000);
}

/* =========================
   OPTIONAL: DEBUG HELP (SAFE)
========================= */

console.log("[MAIN] Blinkita World core loaded");