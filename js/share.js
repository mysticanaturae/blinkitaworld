/* =========================
   BLINKITA SHARE v1
========================= */

window.shareBlinkitaDay = function (data) {

  const text =
`🦋 Blinkita Time

Dan ${data.kin}

Ključ: ${data.energy}

Rešeno ✓

#BlinkitaTime`;

  if (navigator.share) {
    navigator.share({
      title: "Blinkita Time",
      text
    });
  } else {
    navigator.clipboard.writeText(text);
    alert("Kopirano v odložišče");
  }
};