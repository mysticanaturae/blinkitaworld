/* =========================
   BLINKITA MAIN CORE vFINAL
========================= */

window.addEventListener("load", () => {
  boot();
});

function boot() {
  hideLoader();

  // intro
  safeCall("runIntro");

  // hide widget first
  const widget = document.getElementById("ziv-cas-header");
  if (widget) widget.style.display = "none";

  // render once immediately
  safeRender();

  // start systems
  initTimeSystem();
  initScrollObserver();

  // safety fallback
  setTimeout(() => {
    safeRender();
  }, 2000);
}

/* =========================
   SAFE CALL
========================= */

function safeCall(fn) {
  try {
    if (typeof window[fn] === "function") window[fn]();
  } catch (e) {
    console.warn("safeCall error", fn, e);
  }
}

/* =========================
   SAFE RENDER
========================= */

function safeRender() {
  if (typeof window.renderZivCas === "function") {
    window.renderZivCas();
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
    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }, 300);
}

/* =========================
   TIME LOOP
========================= */

function initTimeSystem() {
  setInterval(() => {
    safeRender();
  }, 60000);
}

/* =========================
   SCROLL FX
========================= */

function initScrollObserver() {
  const sections = document.querySelectorAll("section");
  if (!sections.length) return;

  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        o.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  sections.forEach(s => obs.observe(s));
}

window.addEventListener("scroll", () => {
  const footer = document.querySelector("footer");

  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;

  const progress = scrollTop / docHeight;

  footer.style.opacity = 0.4 + progress * 0.6;
  footer.style.transform = `translateY(${10 - progress * 10}px)`;
});