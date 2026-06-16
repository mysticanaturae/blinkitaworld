/* =========================
   TZOLKIN ENGINE v2 — CLEAN ORACLE CORE
   ========================= */

window.renderZivCas = function () {

  const data = window.tzolkinData;
  if (!data) {
    console.warn("[TZOLKIN] tzolkinData missing");
    return;
  }

  // 1. GET CURRENT VALUES (from engine logic or fallback)
  const now = new Date();
  const diffDays = Math.floor(
    (now - new Date("1800-01-01")) / (1000 * 60 * 60 * 24)
  );

  const toneIndex = ((diffDays % 13) + 13) % 13;
  const signIndex = ((diffDays % 20) + 20) % 20;

  const toneNumber = (toneIndex + 1).toString();
  const signName = data.tzolkinSigns[signIndex];

  const toneKeyText = data.toneKey[toneNumber];
  const signKeyText = data.signKey[signName];

  // 2. CODE
  const codeEl = document.getElementById("ziv-code");
  if (codeEl) {
    codeEl.textContent = `${toneKeyText} ${signKeyText}`;
  }

  // 3. GREG DATE
  const greg = document.getElementById("greg-date");
  if (greg) {
    greg.textContent = now.toLocaleDateString("sl-SI", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  // 4. TONE BLOCK
  const toneImg = document.getElementById("tzolkin-number-img");
  const toneTxt = document.getElementById("tzolkin-number");

  if (toneImg) toneImg.src = data.tzolkinNumberImages[toneIndex];
  if (toneTxt) toneTxt.textContent = toneNumber;

  // 5. SIGN BLOCK
  const signImg = document.getElementById("tzolkin-sign-img");
  const signTxt = document.getElementById("tzolkin-sign");

  if (signImg) signImg.src = data.tzolkinSignImages[signIndex];
  if (signTxt) signTxt.textContent = signName;

  // 6. OPTIONAL: LOG (debug)
  console.log("[TZOLKIN]", {
    tone: toneNumber,
    sign: signName,
    code: `${toneKeyText} ${signKeyText}`
  });
};