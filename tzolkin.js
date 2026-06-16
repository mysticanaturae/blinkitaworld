function renderZivCas(){
const now=new Date();
const el=document.getElementById("greg-date");
if(el) el.textContent=now.toLocaleDateString("sl-SI");
}
document.addEventListener("DOMContentLoaded",renderZivCas);
