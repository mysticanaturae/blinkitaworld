/* =========================
   MAIN BOOTSTRAP — STABLE CORE
========================= */

window.addEventListener("load", () => {
  bootSystem();
});

/* =========================
   BOOT
========================= */

function bootSystem() {
  hideLoader();

  safeCall("runIntro");

  initTimeSystem();

  if (typeof renderZivCas === "function" && typeof tzolkinData !== "undefined") {
    renderZivCas(tzolkinData);
  }

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
    setTimeout(() => loader.style.display = "none", 600);
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
   TIME SYSTEM
========================= */

function initTimeSystem() {
  setInterval(() => {
    if (typeof renderZivCas === "function" && typeof tzolkinData !== "undefined") {
      renderZivCas(tzolkinData);
    }
  }, 60000);
}

/* =========================
   SCROLL SYSTEM (FIXED)
========================= */

function initScrollObserver() {
  const sections = document.querySelectorAll("section");

  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.12
  });

  sections.forEach(sec => observer.observe(sec));

  // SAFETY FALLBACK
  setTimeout(() => {
    sections.forEach(sec => sec.classList.add("visible"));
  }, 1000);
}