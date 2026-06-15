/* ==========================
   BLINKITA WORLD 8.0
   Luxury Storytelling Edition (CLEAN PORTAL CORE)
   ========================== */


/* =========================
   INTRO (INDEX + PORTAL SAFE)
   ========================= */

window.addEventListener("load", () => {

  /* INTRO SCREEN */
  const intro = document.querySelector(".blinkita-intro");

  if (intro) {
    setTimeout(() => {
      intro.style.display = "none";
    }, 3000);
  }

  /* PORTAL LOADER (KODA ČASA / CODEx PAGES) */
  const loader = document.getElementById("portal-loader");

  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
    }, 2000);
  }

});


/* =========================
   SCROLL REVEAL (PORTAL EFFECT)
   ========================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });

}, {
  threshold: 0.15
});

sections.forEach(section => {
  observer.observe(section);
});


/* =========================
   HERO PARALLAX (SOFT DIMENSION SHIFT)
   ========================= */

window.addEventListener("scroll", () => {

  const hero = document.querySelector(".hero");

  if (!hero) return;

  const scrollY = window.scrollY;

  hero.style.backgroundPositionY =
    `${scrollY * 0.25}px`;

});


/* =========================
   PORTAL PAGE TRANSITIONS
   ========================= */

document.querySelectorAll("a").forEach(link => {

  const href = link.getAttribute("href");

  if (!href) return;

  /* samo interne HTML strani */
  if (!href.includes(".html")) return;

  link.addEventListener("click", (e) => {

    e.preventDefault();

    document.body.classList.add("page-leaving");

    setTimeout(() => {
      window.location.href = href;
    }, 400);

  });

});

/* =========================
   ŽIV ČAS SYSTEM (ANCHOR BASED - TRADITIONAL)
   ========================= */

/* --- ANCHOR SETUP --- */

// --- Anchor datum za pravilno uskladitev Tzolkin ---
const anchorDate = new Date("1800-01-01"); // 1.1.1800 = 10 Jaguar
const anchorTone = 10; // 10 = Ix (tone za ta datum)
const anchorSignIdx = 14; // Jaguar je 15. znak (če indeksiraš od 0, je 14)

/* --- DATA --- */

const tzolkinNumbers = ["1","2","3","4","5","6","7","8","9","10","11","12","13"];

const tzolkinSigns = [
  "Krokodil", "Veter", "Zora", "Kuščar", "Kača",
  "Smrt", "Jelen", "Zajec", "Voda", "Pes",
  "Opica", "Cesta", "Trsje", "Jaguar", "Orel",
  "Sova", "Zemlja", "Ogledalo", "Nevihta", "Sonce"
];

const tzolkinSignImages = [
  "https://static.wixstatic.com/media/7535eb_8b15827f3f0749f58b47edf2ec8ff34a~mv2.png",
  "https://static.wixstatic.com/media/7535eb_da5c22d0b20c4650ae78bd78d44bdf90~mv2.png",
  "https://static.wixstatic.com/media/7535eb_1431fb4ee97a418383209553a73974e5~mv2.png",
  "https://static.wixstatic.com/media/7535eb_63fa92348cef45778a33ea8df474f3b8~mv2.png",
  "https://static.wixstatic.com/media/7535eb_b144e80ceccc4304b10027e8d2f1e674~mv2.png",
  "https://static.wixstatic.com/media/7535eb_9eda107ea6ed46e8880d6cd3394b3eca~mv2.png",
  "https://static.wixstatic.com/media/7535eb_498008e2e9fb4c7ebc66e4a2cf25a1d4~mv2.png",
  "https://static.wixstatic.com/media/7535eb_a86c9fe89c5f4f4d8a810c284e40bf13~mv2.png",
  "https://static.wixstatic.com/media/7535eb_b1612f1d298245a483212ca3997b6872~mv2.png",
  "https://static.wixstatic.com/media/7535eb_fcf459036d31451fb913cd556bdf98b1~mv2.png",
  "https://static.wixstatic.com/media/7535eb_c5e4c01f59e74424806a8b82d55ea9c9~mv2.png",
  "https://static.wixstatic.com/media/7535eb_8b1bd5f0bebf4e9e84734d0dd7c18a55~mv2.png",
  "https://static.wixstatic.com/media/7535eb_5a43cbda692c4bff8790b8d4fe769ec5~mv2.png",
  "https://static.wixstatic.com/media/7535eb_891ac2c5109f44c8927f69170b93aa78~mv2.png",
  "https://static.wixstatic.com/media/7535eb_bcc1d28cea634696895554c9f25a2788~mv2.png",
  "https://static.wixstatic.com/media/7535eb_acd453dcd54e4ca29483cb610e3bab2e~mv2.png",
  "https://static.wixstatic.com/media/7535eb_d413aa3902864a09a3c2bb1ae2996b53~mv2.png",
  "https://static.wixstatic.com/media/7535eb_57d9eafe0dd249ddb5194e43a629e516~mv2.png",
  "https://static.wixstatic.com/media/7535eb_413ee006283f479dbb46cc737b796bb4~mv2.png",
  "https://static.wixstatic.com/media/7535eb_18fc81a965aa4e69974f11d5bb68dc60~mv2.png"
];

const tzolkinNumberImages = [
  "https://static.wixstatic.com/media/7535eb_8128aa403fb34a39a9abf4c539e07d4e~mv2.png",
  "https://static.wixstatic.com/media/7535eb_58d9713024fd44e3b574ed6e66319df3~mv2.png",
  "https://static.wixstatic.com/media/7535eb_fa772de6b389412a874060866aafe0d0~mv2.png",
  "https://static.wixstatic.com/media/7535eb_034123a9c80d497da70e29c529f761ab~mv2.png",
  "https://static.wixstatic.com/media/7535eb_0949be53659a4112b79aeaf88fba4182~mv2.png",
  "https://static.wixstatic.com/media/7535eb_31c0710a2c40451c8be0474fca598690~mv2.png",
  "https://static.wixstatic.com/media/7535eb_abc754938a3c47e5a3b497a802fbbc09~mv2.png",
  "https://static.wixstatic.com/media/7535eb_a195a39082484f0eafd271594204fd99~mv2.png",
  "https://static.wixstatic.com/media/7535eb_62f1b1f66190462faf5af9be6f04e3f3~mv2.png",
  "https://static.wixstatic.com/media/7535eb_630ea6308de14ff089b351e4f1967594~mv2.png",
  "https://static.wixstatic.com/media/7535eb_b098132554904e4d8d689176145249a0~mv2.png",
  "https://static.wixstatic.com/media/7535eb_6cf0d4b4439a46eb952d52e6cd02bb28~mv2.png",
  "https://static.wixstatic.com/media/7535eb_a5b6f5b75b254f1ca65fbe7cafb8086e~mv2.png"
];

/* --- CORE CALCULATION --- */

function getZivCas() {

  const now = new Date();

  const dayOffset = Math.floor(
    (now - anchorDate) / (1000 * 60 * 60 * 24)
  );

  // tone (1–13)
  const tzNumberIndex =
    (anchorTone - 1 + dayOffset) % 13;

  // sign (0–19)
  const tzSignIndex =
    (anchorSignIdx + dayOffset) % 20;

  return {
    greg: now.toLocaleDateString("sl-SI"),

    number: tzolkinNumbers[tzNumberIndex],
    sign: tzolkinSigns[tzSignIndex],

    img: tzolkinSignImages[tzSignIndex],
    numImg: tzolkinNumberImages[tzNumberIndex]
  };
}

/* --- HEADER UPDATE --- */

function updateZivCas() {

  const data = getZivCas();

  const dateEl = document.getElementById("greg-date");
  const numEl = document.getElementById("tzNumber");
  const signEl = document.getElementById("tzSign");

  const imgEl = document.getElementById("tzSignImg");
  const numImgEl = document.getElementById("tzNumberImg");

  if (dateEl) dateEl.textContent = data.greg;

  // samo število + ime (BREZ PREFIXOV)
  if (numEl) numEl.textContent = data.number;
  if (signEl) signEl.textContent = data.sign;

  if (imgEl) imgEl.src = data.img;
  if (numImgEl) numImgEl.src = data.numImg;
}

window.addEventListener("load", updateZivCas);