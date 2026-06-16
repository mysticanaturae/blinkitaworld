/* =========================
   TZOLKIN ENGINE v2 — FIXED CLEAN CORE
   ========================= */

window.renderZivCas = function () {

  const data = window.tzolkinData;
  if (!data) {
    console.warn("[TZOLKIN] tzolkinData missing");
    return;
  }

  // 1. DATE
  const now = new Date();

  // 2. ANCHOR (IZ DATA, NE GLOBAL)
  const anchorDate = data.anchorDate ? new Date(data.anchorDate) : new Date("1800-01-01");

  const diffDays = Math.floor(
    (now - anchorDate) / (1000 * 60 * 60 * 24)
  );

  // 3. INDEXES
  const toneIndex = ((diffDays % 13) + 13) % 13;
  const signIndex = ((diffDays % 20) + 20) % 20;

  // 4. RAW VALUES
  const toneNumber = String(toneIndex + 1);
  const signName = data.tzolkinSigns[signIndex];

  // 5. KEYWORDS
  const toneKeyText = data.toneKey[toneNumber];
  const signKeyText = data.signKey[signName];

  // 6. IMAGES
  const toneImgSrc = data.tzolkinNumberImages?.[toneIndex];
  const signImgSrc = data.tzolkinSignImages?.[signIndex];

  // =========================
  // DOM UPDATE
  // =========================

  const codeEl = document.getElementById("ziv-code");
  if (codeEl) {
    codeEl.textContent = `${toneKeyText} ${signKeyText}`;
  }

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

  if (toneImg && toneImgSrc) toneImg.src = toneImgSrc;
  if (toneTxt) toneTxt.textContent = toneNumber;

  const signImg = document.getElementById("tzolkin-sign-img");
  const signTxt = document.getElementById("tzolkin-sign");

  if (signImg && signImgSrc) signImg.src = signImgSrc;
  if (signTxt) signTxt.textContent = signName;

  // DEBUG
  console.log("[TZOLKIN OK]", {
    tone: toneNumber,
    sign: signName,
    code: `${toneKeyText} ${signKeyText}`
  });
};