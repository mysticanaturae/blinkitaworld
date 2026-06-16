/* =========================
   TZOLKIN ENGINE
   ========================= */

function getZivCas() {
  const now = new Date();

  const diffDays = Math.floor(
    (now - anchorDate) / (1000 * 60 * 60 * 24)
  );

  const numberIndex = diffDays % 13;
  const signIndex = diffDays % 20;

  return {
    greg: now.toLocaleDateString("sl-SI"),
    number: tzolkinNumbers[numberIndex],
    sign: tzolkinSigns[signIndex],
    numImg: tzolkinNumberImages[numberIndex],
    img: tzolkinSignImages[signIndex]
  };
}

function safeSetImage(img, src) {
  if (!img) return;

  if (!src) {
    img.style.display = "none";
    return;
  }

  img.style.display = "";
  img.src = src;

  img.onerror = () => img.style.display = "none";
}

/* GLOBAL ACCESS */
window.getZivCas = getZivCas;
window.safeSetImage = safeSetImage;