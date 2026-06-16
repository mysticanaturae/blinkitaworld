window.addEventListener("load", () => {
  const loader = document.getElementById("portal-loader");
  if (loader) loader.style.display = "none";

  if (typeof runIntro === "function") runIntro();
  if (typeof initScrollReveal === "function") initScrollReveal();
  if (typeof initParallax === "function") initParallax();
  if (typeof initPageTransitions === "function") initPageTransitions();

  if (typeof updateZivCas === "function") {
    updateZivCas();
    setInterval(updateZivCas, 60000);
  }
});