
/* =========================
   UI ENGINE — STABLE CORE
   Blinkita World
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
    intro.classList.add("fade");
    setTimeout(() => {
      intro.style.display = "none";
    }, 1000);
  };

  setTimeout(step, 800);
}

function skipIntro() {
  introRunning = false;

  const intro = document.querySelector(".blinkita-intro");
  if (!intro) return;

  intro.classList.add("fade");

  setTimeout(() => {
    intro.style.display = "none";
  }, 1000);
}

window.runIntro = runIntro;
window.skipIntro = skipIntro;

/* =========================
   SCROLL REVEAL (FIXED CORE)
   ========================= */

function initScrollReveal() {
  const sections = document.querySelectorAll("section");

  if (!sections.length) return;

  // fallback (no observer support)
  if (!("IntersectionObserver" in window)) {
    sections.forEach(s => s.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.15
  });

  sections.forEach(section => observer.observe(section));
}

window.initScrollReveal = initScrollReveal;

/* =========================
   PARALLAX (SAFE VERSION)
   ========================= */

function initParallax() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (ticking) return;

    ticking = true;

    requestAnimationFrame(() => {
      const y = window.scrollY * 0.15;

      // SAFE transform (no layout break)
      hero.style.transform = `translateY(${y * 0.05}px)`;

      ticking = false;
    });
  });
}

window.initParallax = initParallax;

/* =========================
   PAGE TRANSITIONS (ROBUST)
   ========================= */

function initPageTransitions() {
  const links = document.querySelectorAll("a[href$='.html']");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const href = link.getAttribute("href");
      if (!href) return;

      document.body.classList.add("page-leaving");

      setTimeout(() => {
        window.location.href = href;
      }, 350);
    });
  });
}

window.initPageTransitions = initPageTransitions;

renderZivCas(toneKey, signKey, tzolkinData);