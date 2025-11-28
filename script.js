window.addEventListener("load", () =>{
    const profile = document.querySelector (".profile-img");
    if (profile){
        profile.style.opacity = "0";
        profile.style.transform = "scale(0.8)";
        setTimeout(() => {
            profile.style.transition = "all 0.8s ease";
            profile.style.opacity = "1";
            profile.style.transform = "scale(1)";
        }, 200);
    }
});

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
      const loadingScreen = document.getElementById('loading-screen');
     
      if (loadingScreen) {
          loadingScreen.style.opacity = '0';
         
          setTimeout(function() {
              loadingScreen.style.display = 'none';
          }, 500); 
      }
  }, 5000); 
});

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: "smooth"
      });
    }
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const navEl = document.querySelector('nav');
if (menuToggle && navEl) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navEl.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".card, .port-item").forEach(el => {
  el.classList.add("fade-up");
  observer.observe(el);
});

document.querySelectorAll(".port-item").forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.boxShadow = "0 12px 40px rgba(110, 231, 183, 0.2)";
  });
  item.addEventListener("mouseleave", () => {
    item.style.boxShadow = "";
  });
});
document.querySelectorAll(".gallery-grid img").forEach(img => {
 img.addEventListener("click", () => {
 const lightbox = document.createElement("div");
 lightbox.style.position = "fixed";
 lightbox.style.top = "0";
 lightbox.style.left = "0";
 lightbox.style.width = "100%";
 lightbox.style.height = "100%";
 lightbox.style.background = "rgba(0,0,0,0.9)";
 lightbox.style.display = "flex";
 lightbox.style.alignItems = "center";
 lightbox.style.justifyContent = "center";
 lightbox.style.zIndex = "1000";

const imgClone = document.createElement("img");
 imgClone.src = img.src;
 imgClone.style.maxWidth = "90%";
 imgClone.style.maxHeight = "90%";
 imgClone.style.borderRadius = "10px";
 imgClone.style.boxShadow = "0 0 30px rgba(255,255,255,0.3)";

lightbox.appendChild(imgClone);
 document.body.appendChild(lightbox);

 lightbox.addEventListener("click", () => {
 document.body.removeChild(lightbox);
 });
 });
});