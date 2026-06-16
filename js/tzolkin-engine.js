/* =========================
   TZOLKIN ENGINE v3 — CLEAN STABLE CORE
   ========================= */

/* =========================
   KIN CALCULATOR
========================= */

function calculateTzolkinKin(dateInput) {

  const dateParts = dateInput.split("-");

  const date = new Date(Date.UTC(
    parseInt(dateParts[0]),
    parseInt(dateParts[1]) - 1,
    parseInt(dateParts[2])
  ));

  const refDate = new Date(Date.UTC(1800, 0, 1));
  const refKin = 114;
  const msPerDay = 1000 * 60 * 60 * 24;

  const daysSince = Math.floor((date - refDate) / msPerDay);

  const kin =
    ((refKin - 1 + daysSince) % 260 + 260) % 260 + 1;

  return kin;
}

/* =========================
   MAIN RENDER ENGINE
========================= */

window.renderZivCas = function () {

  const data = window.tzolkinData;

  if (!data) {
    console.warn("[TZOLKIN] tzolkinData missing");
    return;
  }

  const now = new Date();
  const todayStr = now.toISOString().split("T")[0];

  const kin = calculateTzolkinKin(todayStr);

  const toneIndex = (kin - 1) % 13;
  const signIndex = (kin - 1) % 20;

  const toneNumber = String(toneIndex + 1);
  const signName = data.tzolkinSigns[signIndex];

  const toneKeyText = data.toneKey?.[toneNumber] || "";
  const signKeyText = data.signKey?.[signName] || "";

  const relationEnergy = `${toneKeyText} ${signKeyText}`;

  const toneImgSrc = data.tzolkinNumberImages?.[toneIndex];
  const signImgSrc = data.tzolkinSignImages?.[signIndex];

  /* =========================
     DOM UPDATE
  ========================= */

  const codeEl = document.getElementById("ziv-code");
  if (codeEl) codeEl.textContent = relationEnergy;

  const greg = document.getElementById("greg-date");
  if (greg) {
    greg.textContent = now.toLocaleDateString("sl-SI", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  const toneImg = document.getElementById("tzolkin-number-img");
  const toneTxt = document.getElementById("tzolkin-number");

  if (toneImg) {
    toneImg.src = toneImgSrc || "";
    toneImg.style.display = toneImgSrc ? "block" : "none";
  }

  if (toneTxt) toneTxt.textContent = toneNumber;

  const signImg = document.getElementById("tzolkin-sign-img");
  const signTxt = document.getElementById("tzolkin-sign");

  if (signImg) {
    signImg.src = signImgSrc || "";
    signImg.style.display = signImgSrc ? "block" : "none";
  }

  if (signTxt) signTxt.textContent = signName;

  console.log("[TZOLKIN OK]", {
    kin,
    tone: toneNumber,
    sign: signName,
    code: relationEnergy
  });
};