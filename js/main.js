/* =========================
   MAIN BOOTSTRAP — ORCHESTRATOR CORE
========================= */

window.addEventListener("load", () => {
  bootSystem();
});

/* =========================
   BOOT SYSTEM (SINGLE ENTRY POINT)
========================= */

function bootSystem() {

  hideLoader();

  // CORE UI
  safeCall("initUI");

  // TIME SYSTEM
  initTimeSystem();

  // SCROLL SYSTEM
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
    console.warn("[SAFE CALL ERROR]", fnName, e);
  }
}

/* =========================
   TIME SYSTEM
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
   SCROLL OBSERVER
========================= */

function initScrollObserver() {

  const sections = document.querySelectorAll("section");

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }

      });

    },
    { threshold: 0.12 }
  );

  sections.forEach(sec => observer.observe(sec));

  // fallback safety
  setTimeout(() => {
    sections.forEach(sec => sec.classList.add("visible"));
  }, 1500);
}

/* =========================
   DEBUG
========================= */

console.log("[MAIN] Blinkita system online");