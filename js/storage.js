/* =========================
   BLINKITA STORAGE v1
========================= */

function getKey(date) {
  return `blinkita_day_${date}`;
}

/* =========================
   SAVE PROGRESS
========================= */

window.saveBlinkitaProgress = function (date, data) {
  localStorage.setItem(getKey(date), JSON.stringify(data));
};

/* =========================
   LOAD PROGRESS
========================= */

window.loadBlinkitaProgress = function (date) {
  const raw = localStorage.getItem(getKey(date));
  return raw ? JSON.parse(raw) : null;
};

/* =========================
   CHECK DONE
========================= */

window.isDayCompleted = function (date) {
  return !!localStorage.getItem(getKey(date));
};