
/* =========================
   TZOLKIN CORE ENGINE
   ========================= */

function getZivCas() {
  const now = new Date();

  const diffDays = Math.floor(
    (now - new Date("1800-01-01")) / (1000 * 60 * 60 * 24)
  );

  const numberIndex = diffDays % 13;
  const signIndex = diffDays % 20;

  const number = tzolkinNumbers[numberIndex];
  const sign = tzolkinSigns[signIndex];

  return {
    greg: now.toLocaleDateString("sl-SI"),
    number,
    sign,
    numImg: tzolkinNumberImages[numberIndex],
    img: tzolkinSignImages[signIndex]
  };
}

/* =========================
   SAFE IMAGE HANDLER
   ========================= */

function safeSetImage(img, src) {
  if (!img) return;

  if (!src) {
    img.style.display = "none";
    return;
  }

  img.style.display = "";
  img.src = src;

  img.onerror = () => {
    img.style.display = "none";
  };
}

/* =========================
   ORACLE TOGGLE
   ========================= */

function toggleOracle() {
  const panel = document.getElementById("oracle-panel");
  if (!panel) return;
  panel.classList.toggle("oracle-visible");
}
window.toggleOracle = toggleOracle;

/* =========================
   ORACLE FLIP
   ========================= */

function flipOracle() {
  const card = document.querySelector(".oracle-card");
  if (!card) return;
  card.classList.toggle("flipped");
}
window.flipOracle = flipOracle;

/* =========================
   INTRO FLOW
   ========================= */

function runIntro() {
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

  const run = () => {
    if (i < phases.length) {
      phaseEl.textContent = phases[i].name;
      textEl.textContent = phases[i].text;
      i++;
      setTimeout(run, 2200);
    } else {
      intro.classList.add("fade");
      setTimeout(() => (intro.style.display = "none"), 1200);
    }
  };

  setTimeout(run, 800);
}

/* =========================
   SCROLL REVEAL
   ========================= */

function initScrollReveal() {
  const sections = document.querySelectorAll("section");

  if (!("IntersectionObserver" in window) || sections.length === 0) {
    sections.forEach(s => s.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach((s) => observer.observe(s));
}

/* =========================
   HERO PARALLAX
   ========================= */

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

/* =========================
   PAGE TRANSITIONS
   ========================= */

function initPageTransitions() {
  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || !href.includes(".html")) return;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.add("page-leaving");

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    });
  });
}

/* =========================
   CORE UPDATE ENGINE
   ========================= */

function updateZivCas() {
  try {
    if (typeof getZivCas !== "function") return;

    const data = getZivCas();
    if (!data) return;

    const dateEl = document.getElementById("greg-date");
    const numEl = document.getElementById("tzolkin-number");
    const signEl = document.getElementById("tzolkin-sign");
    const keywordHeader = document.getElementById("ziv-keyword");

    if (dateEl) dateEl.textContent = data.greg || "";
    if (numEl) numEl.textContent = data.number || "";
    if (signEl) signEl.textContent = data.sign || "";

    const toneKeyword =
      typeof toneKey !== "undefined"
        ? (toneKey[data.number] || "")
        : "";

    const signKeyword =
      typeof signKey !== "undefined"
        ? (signKey[data.sign] || "")
        : "";

    if (keywordHeader) {
      keywordHeader.textContent =
        `${toneKeyword} • ${signKeyword}`.replace(/^ • /, "").replace(/ • $/, "");
    }

    safeSetImage(document.getElementById("tzolkin-sign-img"), data.img);
    safeSetImage(document.getElementById("tzolkin-number-img"), data.numImg);

    safeSetImage(document.getElementById("oracle-num-img"), data.numImg);
    safeSetImage(document.getElementById("oracle-sign-img"), data.img);
    safeSetImage(document.getElementById("oracle-back-num-img"), data.numImg);
    safeSetImage(document.getElementById("oracle-back-sign-img"), data.img);

    const toneInfo = toneOracle?.[String(data.number)] || {};
    const signInfo = signOracle?.[data.sign] || {};

    const toneTitle = document.getElementById("oracle-number-title");
    const toneEss = document.getElementById("oracle-number-essence");
    const toneMedFront = document.getElementById("oracle-number-medicine");

    if (toneTitle) toneTitle.textContent = "Ton " + data.number;
    if (toneEss) toneEss.textContent = toneInfo.essence || "";
    if (toneMedFront) toneMedFront.textContent = toneInfo.medicine || "";

    const signTitle = document.getElementById("oracle-sign-title");
    const signEss = document.getElementById("oracle-sign-essence");
    const signKeywords = document.getElementById("oracle-sign-keywords");
    const signMedFront = document.getElementById("oracle-sign-medicine");

    if (signTitle) signTitle.textContent = data.sign || "";
    if (signEss) signEss.textContent = signInfo.essence || "";
    if (signKeywords) signKeywords.textContent = signInfo.keywords || "";
    if (signMedFront) signMedFront.textContent = signInfo.medicine || "";

    const toneBack = toneMedicine?.[String(data.number)] || {};
    const signBack = signMedicine?.[data.sign] || {};

    const keywordEl = document.getElementById("oracle-keyword");
    const medEl = document.getElementById("oracle-medicine-text");
    const affEl = document.getElementById("oracle-affirmation");
    const qEl = document.getElementById("oracle-question");

    if (keywordEl) {
      keywordEl.textContent =
        `${toneKeyword} • ${signKeyword}`.replace(/^ • /, "").replace(/ • $/, "");
    }

    if (medEl) {
      medEl.textContent =
        `${toneBack.medicine || ""} ${signBack.medicine || ""}`.trim();
    }

    if (affEl) {
      affEl.textContent =
        signBack.affirmation || toneBack.affirmation || "";
    }

    if (qEl) {
      qEl.textContent =
        signBack.question || toneBack.question || "";
    }

  } catch (err) {
    console.error("updateZivCas crash:", err);
  }
}

/* =========================
   AUTO START (SINGLE SOURCE OF TRUTH)
   ========================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("portal-loader");
  if (loader) loader.style.display = "none";

  runIntro();
  initScrollReveal();
  initParallax();
  initPageTransitions();

  updateZivCas();
  setInterval(updateZivCas, 60000);
});