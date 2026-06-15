/* ==========================
   BLINKITA WORLD 8.0
   Luxury Storytelling Edition
   ========================== */


/* INTRO */

window.addEventListener("load", () => {

  const intro = document.querySelector(".blinkita-intro");

  if(!intro) return;

  setTimeout(() => {

    intro.style.display = "none";

  }, 3000);

});


/* SCROLL REVEAL */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add("visible");

    }

  });

},{
  threshold:0.15
});

sections.forEach(section=>{
  observer.observe(section);
});


/* HERO PARALLAX */

window.addEventListener("scroll", ()=>{

  const hero = document.querySelector(".hero");

  if(!hero) return;

  const scrollY = window.scrollY;

  hero.style.backgroundPositionY =
    `${scrollY * 0.25}px`;

});


/* PORTAL TRANSITIONS */

document.querySelectorAll("a").forEach(link=>{

  const href = link.getAttribute("href");

  if(!href) return;

  if(!href.includes(".html")) return;

  link.addEventListener("click",(e)=>{

    e.preventDefault();

    document.body.classList.add("page-leaving");

    setTimeout(()=>{

      window.location.href = href;

    },400);

  });

});