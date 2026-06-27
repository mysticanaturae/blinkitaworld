/* =========================
   TZOLKIN ENGINE v5 — STABLE LOCAL CORE
========================= */

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
   MAIN RENDER (SINGLE SOURCE)
========================= */

window.renderZivCas = function () {

  const data = window.tzolkinData;
  if (!data) return;

  const now = new Date();
  const today = getLocalDateString(now);

  const kin = calculateTzolkinKin(today);

  const toneIndex = (kin - 1) % 13;
  const signIndex = (kin - 1) % 20;

  const toneNumber = String(toneIndex + 1);
  const signName = data.tzolkinSigns[signIndex];

  const toneKey = data.toneKey?.[toneNumber] || "";
  const signKey = data.signKey?.[signName] || "";

  const energy = `${toneKey} ${signKey}`;

  /* =========================
     DOM
  ========================= */

  const codeEl = document.getElementById("ziv-code");
  if (codeEl) codeEl.textContent = energy;

  const dateEl = document.getElementById("greg-date");
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString("sl-SI", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  const toneEl = document.getElementById("tzolkin-number");
  if (toneEl) toneEl.textContent = toneNumber;

  const signEl = document.getElementById("tzolkin-sign");
  if (signEl) signEl.textContent = signName;

  const toneImg = document.getElementById("tzolkin-number-img");
  if (toneImg) {
    toneImg.src = data.tzolkinNumberImages?.[toneIndex] || "";
  }

  const signImg = document.getElementById("tzolkin-sign-img");
  if (signImg) {
    signImg.src = data.tzolkinSignImages?.[signIndex] || "";
  }

  console.log("[TZOLKIN]", { kin, toneNumber, signName, energy, today });
};

window.getZivCasData = function () {

  const data = window.tzolkinData;
  if (!data) return null;

  const now = new Date();
  const today = getLocalDateString(now);

  const kin = calculateTzolkinKin(today);

  const toneIndex = (kin - 1) % 13;
  const signIndex = (kin - 1) % 20;

  const toneNumber = String(toneIndex + 1);
  const signName = data.tzolkinSigns[signIndex];

  const toneKey = data.toneKey?.[toneNumber] || "";
  const signKey = data.signKey?.[signName] || "";

  return {
    date: today,
    kin,
    toneNumber,
    signName,
    toneKey,
    signKey,
    energy: `${toneKey} ${signKey}`,
    toneIndex,
    signIndex
  };
};

window.renderZivCas = function () {

  const dataObj = window.getZivCasData();
  if (!dataObj) return;

  const now = new Date();

  const codeEl = document.getElementById("ziv-code");
  if (codeEl) codeEl.textContent = dataObj.energy;

  const dateEl = document.getElementById("greg-date");
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString("sl-SI", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  const toneEl = document.getElementById("tzolkin-number");
  if (toneEl) toneEl.textContent = dataObj.toneNumber;

  const signEl = document.getElementById("tzolkin-sign");
  if (signEl) signEl.textContent = dataObj.signName;

  const toneImg = document.getElementById("tzolkin-number-img");
  if (toneImg) {
    toneImg.src = window.tzolkinData.tzolkinNumberImages?.[dataObj.toneIndex] || "";
  }

  const signImg = document.getElementById("tzolkin-sign-img");
  if (signImg) {
    signImg.src = window.tzolkinData.tzolkinSignImages?.[dataObj.signIndex] || "";
  }

  console.log("[TZOLKIN]", dataObj);
};
