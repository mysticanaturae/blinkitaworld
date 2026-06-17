/* =========================
   TZOLKIN ENGINE v5 — STABLE CORE (CLEAN)
========================= */

/* =========================
   SAFE STATE
========================= */

let isRendering = false;

/* =========================
   LOCAL DATE
========================= */

function getLocalDateString(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");

  return `${y}-${m}-${d}`;
}

/* =========================
   KIN CALC
========================= */

function calculateTzolkinKin(dateInput) {
  const [y, m, d] = dateInput.split("-").map(Number);

  const date = new Date(y, m - 1, d);

  const refDate = new Date(1800, 0, 1);
  const refKin = 114;

  const msPerDay = 86400000;

  const days = Math.floor((date - refDate) / msPerDay);

  return ((refKin - 1 + days) % 260 + 260) % 260 + 1;
}

/* =========================
   MAIN RENDER (SAFE SINGLE SOURCE)
========================= */

window.renderZivCas = function () {

  if (isRendering) return;
  isRendering = true;

  try {
    const data = window.tzolkinData;
    if (!data) return;

    const now = new Date();
    const today = getLocalDateString(now);

    const kin = calculateTzolkinKin(today);

    const toneIndex = (kin - 1) % 13;
    const signIndex = (kin - 1) % 20;

    const toneNumber = String(toneIndex + 1);
    const signName = data.tzolkinSigns?.[signIndex];

    const toneKey = data.toneKey?.[toneNumber] || "";
    const signKey = data.signKey?.[signName] || "";

    const energy = `${toneKey} ${signKey}`;

    /* =========================
       DOM GUARD (CRITICAL FIX)
    ========================= */

    const codeEl = document.getElementById("ziv-code");
    const dateEl = document.getElementById("greg-date");
    const toneEl = document.getElementById("tzolkin-number");
    const signEl = document.getElementById("tzolkin-sign");
    const toneImg = document.getElementById("tzolkin-number-img");
    const signImg = document.getElementById("tzolkin-sign-img");

    // if page doesn't have widget → exit safely
    if (!codeEl && !dateEl && !toneEl && !signEl) return;

    /* =========================
       UPDATE UI
    ========================= */

    if (codeEl) codeEl.textContent = energy;

    if (dateEl) {
      dateEl.textContent = now.toLocaleDateString("sl-SI", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }

    if (toneEl) toneEl.textContent = toneNumber;
    if (signEl) signEl.textContent = signName;

    if (toneImg && data.tzolkinNumberImages) {
      toneImg.src = data.tzolkinNumberImages?.[toneIndex] || "";
    }

    if (signImg && data.tzolkinSignImages) {
      signImg.src = data.tzolkinSignImages?.[signIndex] || "";
    }

    console.log("[TZOLKIN]", { kin, toneNumber, signName, energy, today });

  } catch (err) {
    console.warn("[TZOLKIN ERROR]", err);
  } finally {
    isRendering = false;
  }
};