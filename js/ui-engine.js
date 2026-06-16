
/* =========================
   UI ENGINE
   ========================= */

let introRunning = false;

/* INTRO */
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
      intro.classList.add("fade");
      setTimeout(() => (intro.style.display = "none"), 1200);
    }
  };

  setTimeout(step, 800);
}

function skipIntro() {
  introRunning = false;

  const intro = document.querySelector(".blinkita-intro");
  if (!intro) return;

  intro.classList.add("fade");
  setTimeout(() => (intro.style.display = "none"), 1200);
}

window.runIntro = runIntro;
window.skipIntro = skipIntro;

/* SCROLL REVEAL */
function initScrollReveal() {
  const sections = document.querySelectorAll("section");

  if (!("IntersectionObserver" in window) || !sections.length) {
    sections.forEach(s => s.classList.add("visible"));
    return;
  }

  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        o.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(s => obs.observe(s));
}

/* PARALLAX */
function initParallax() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (ticking) return;

    requestAnimationFrame(() => {
      hero.style.backgroundPositionY = window.scrollY * 0.25 + "px";
      ticking = false;
    });

    ticking = true;
  });
}

/* PAGE TRANSITIONS */
function initPageTransitions() {
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href?.includes(".html")) return;

    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.add("page-leaving");

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    });
  });
}

window.initScrollReveal = initScrollReveal;
window.initParallax = initParallax;
window.initPageTransitions = initPageTransitions;